<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			// #ifdef APP-PLUS
			var callbacks = [];  
			var receiver;  
			var filter;  
			var main;  
			var isInit = false;  
			var isRegistered = false;  
			var isOlderVersion = false;  

			//plusReady封装，若使用mui，可直接使用mui.plusReady()方法；  
			var plusReady = function(callback){  
				 if (typeof plus !== 'undefined') {  
					callback();  
				} else {  
					document.addEventListener("plusready", function() {  
						callback();  
					}, false);  
				}  
			}  

			/**  
			* 初始化  
			*/  
			var init = function(callback) {  
				//仅支持Android版本  
				if (plus.os.name !== 'Android') {  
					return;  
				}  
				try {  
					var version = plus.runtime.innerVersion.split('.');  
					isOlderVersion = parseInt(version[version.length - 1]) < 22298;  
					main = plus.android.runtimeMainActivity(); 
					var Intent = plus.android.importClass('android.content.Intent');  
					var IntentFilter = plus.android.importClass('android.content.IntentFilter');  
					var SmsMessage = plus.android.importClass('android.telephony.SmsMessage');  
					var receiverClass = 'io.dcloud.feature.internal.reflect.BroadcastReceiver';  
					if (isOlderVersion) {  
						receiverClass = 'io.dcloud.feature.internal.a.a';  
					}  
					filter = new IntentFilter();  
					var onReceiveCallback = function(context, intent) {  
						try {  
							var action = intent.getAction();  
							if (action == "android.provider.Telephony.SMS_RECEIVED") {  
								var pdus = intent.getSerializableExtra("pdus");  
								var msgs = [];  
								for (var i = 0, len = pdus.length; i < len; i++) {  
									msgs.push(SmsMessage.createFromPdu(pdus[i]));  
								}  
								for (var i = 0, len = callbacks.length; i < len; i++) {  
									callbacks[i](msgs);  
								}  
							}  
						} catch (e) {}  
					}  
					receiver = plus.android.implements(receiverClass, {  
						a: onReceiveCallback,  
						onReceive: onReceiveCallback  
					});  
					filter.addAction("android.provider.Telephony.SMS_RECEIVED");  
					callback && callback();  
				} catch (e) {}  
			}  

			//注册短信监听  
			var register = function(callback) {  
				callbacks.push(callback);  
				if (!isInit) {  
					isInit = isRegistered = true;  
					plusReady(function() {  
						// 手动关闭启动界面
						plus.navigator.closeSplashscreen();
						
						init(function() {  
							setTimeout(function() {  
								//                  console.log('registerReceiver');  
								try {  
									if (isOlderVersion) {  
										main.a(receiver, filter);  
									} else {  
										main.registerReceiver(receiver, filter); //注册监听  
									}  
								} catch (e) {}  
							}, 300);  
						});  
					});  
				} else if (!isRegistered) {  
					//      console.log('registerReceiver');  
					try {  
						if (isOlderVersion) {  
							main.a(receiver, filter);  
						} else {  
							main.registerReceiver(receiver, filter); //注册监听  
						}  
					} catch (e) {}  
				}  
			};  
			//注销监听，在登录成功或从登录页跳转到其它页面后调用  
			var unregister = function(callback, remove) {  
				for (var i = 0, len = callbacks.length; i < len; i++) {  
					if (callbacks[i] === callback) {  
						callbacks.splice(i, 1);  
					}  
				}  
				if (remove && !callbacks.length) {  
					if (main && isRegistered) {  
						try {  
							if (isOlderVersion) {  
								main.a(receiver);  
							} else {  
								main.unregisterReceiver(receiver);  
							}  
						} catch (e) {}  
						isRegistered = false;  
						//          console.log('unregisterReceiver');  
					}  
				}  
			};  

			//验证码匹配规则，需要根据实际站点匹配  
			var codeRegex = /[0-9]{6}/g;  

			var handleSMS = function(msgs) {  
				console.log(msgs.length);
				
				if (msgs.length > 0) {
					// getMessageBody() 得到文本信息的实体部分
					// getDisplayOriginatingAddress() | getOriginatingAddress() 得到邮件网关发信人地址信息
					// getServiceCenterAddress() 传递这条信息的信息服务中心地址（即 +86***********）
					let msgBody = msgs[msgs.length-1].getDisplayMessageBody(); // 得到邮件网关消息显示部分的正文部分
					let msgAddress = msgs[msgs.length-1].getServiceCenterAddress(); // 传递这条信息的信息服务中心地址
					console.log(msgBody + ' -- by ' + msgAddress);
					
					if (~msgAddress.indexOf('+86')) { // TODO 校验短信地址是否合法
						console.log('====plus.storage.getLength==== ', plus.storage.getLength());
					
						sendBroadcast(msgBody);
						plus.storage.setItem('xbhMsg', msgBody);
						plus.nativeUI.toast(msgBody + ' -- by ' + msgAddress);
					}
				}
				
				/*for (var i = 0, len = msgs.length; i < len; i++) {  
					var content = msgs[i].getDisplayMessageBody();  
					//匹配短信内容，若短信内容包含“XX网”，则认为初步匹配成功  
					if (~content.indexOf('XX网')) {  
						//匹配验证码规则，比如包含6位数字  
						var matches = content.match(codeRegex);  
						if (matches && matches.length) {  
							var code = matches[0];  
							//验证码输入框控件，需根据实际页面修改选择器  
							var codeElem = document.querySelector('.login-view form input[type="password"]');  
							if (codeElem) {  
								codeElem.value = code;  

								//TODO 这里可以取消短信监听  

								//模拟表单提交，需根据实际页面修改选择器  
								document.querySelector('.login-view form button[type="submit"]').click();  
								plus.nativeUI.toast('获取短信验证码成功，自动登录..');  

							}  
							break;  
						}  
					}  
				}  */
			};  
			
			// 获取缓存中的短信
			var oldXbhMsg = plus.storage.getItem('xbhMsg');
			console.log('======plus.storage.getItem======= ', oldXbhMsg);
			
			// 给小百合播放器发送广播
			var sendBroadcast = function(xbhMsg) {
				if (xbhMsg && plus.runtime.isApplicationExist({pname: 'com.harison.adver'})) {
					let Intent = plus.android.importClass('android.content.Intent');
					let intent = new Intent('xbh.intent.action.printer.PRINT_SERVICE_START');
					
					intent.putExtra('type', 'text');
					intent.putExtra('key', 'dayin'); // TODO 对应文本控件id -> weather
					intent.putExtra('value', xbhMsg);
					main.sendBroadcast(intent);
				} else {
					plus.nativeUI.toast('短信或小百合播放器不存在！');
				}
			}

			/* ====================================================== 以上声明，以下调用 ====================================================== */

			try {
				// 第一件事：登录页面注册短信监听事件  
				register(handleSMS);  
				
				// 第二件事：首次启动判断缓存中是否已有短信，有则发送广播
				if (oldXbhMsg) {
					setTimeout(()=>{
						sendBroadcast(oldXbhMsg);
						plus.nativeUI.toast(oldXbhMsg);
					}, 5000);
				}
			} catch (e) {
				plus.nativeUI.toast(typeof e.message==='string' ? e.message : e);
			}
			// #endif
		},
		onShow: function() {
			console.log('App Show')
			
			// 第三件事：启动后直接在后台运行
			let main = plus.android.runtimeMainActivity(); 
			main.moveTaskToBack(false);
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #2C2C2C;
	}
</style>
