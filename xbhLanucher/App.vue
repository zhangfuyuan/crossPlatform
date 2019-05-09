<script>
	import {
		Mac,
		getIp
	} from '@/common/util.js';
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			// 监听键松开事件
			plus.key.addEventListener("keydown",function(e){
				let keyCode = e.keyCode + ''; // 转成字符串
				console.log("keydown: "+keyCode);
				
				if (keyCode === '4') { // 返回：4
					uni.navigateBack();
				} else { // 上：19 下：20 左：21 右：22 确定：23 
					var pages = getCurrentPages();
					var page = pages[pages.length - 1];
					var currentWebview = page.$getAppWebview();
					
					plus.webview.postMessageToUniNView({
						module: 'keydown',
						res: keyCode
					}, currentWebview.id);
				}
			}, false);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onUniNViewMessage: function(e) {
			console.log("App.vue收到数据:" + JSON.stringify(e.data));

			var pages = getCurrentPages();
			var page = pages[pages.length - 1];
			var currentWebview = page.$getAppWebview();
			var plusReady = function(callback){  
					 if (typeof plus !== 'undefined') {  
						callback();  
					} else {  
						document.addEventListener("plusready", function() {  
							callback();  
						}, false);  
					}  
				};
				
			try {
				plusReady(function() {
					if (e.data.module === 'MAC&IP') { // 获取设备MAC地址和IP地址
					
						plus.webview.postMessageToUniNView({
							module: e.data.module,
							res: {
								mac: Mac.address(),
								ip: getIp()
							}
						}, currentWebview.id);
						
					} else if (e.data.module==='launchApp' && e.data.package) { // 调启外部应用
					
						let packageList = e.data.package;
						let len = packageList.length;
					
						if (len > 0) {
							for (let i=0; i<len; i++) {
								if (plus.runtime.isApplicationExist({pname: packageList[i]})) {
									plus.runtime.launchApplication({pname: packageList[i]}, error => {
										uni.showToast({
											title: error.message,
											icon: 'none',
											position: 'top'
										});
									});
									break;
								} else {
									uni.showToast({
										title: packageList[i] + ' 不存在！',
										icon: 'none',
										position: 'top'
									});
								}
							}
						} else {
							uni.showToast({
								title: '调启外部应用失败！',
								icon: 'none',
								position: 'top'
							});
						}
						
					} else if (e.data.module === 'appList') {
						
						// 引入依赖类包
						plus.android.importClass('java.util.ArrayList');  
						plus.android.importClass('android.content.pm.ApplicationInfo');
						plus.android.importClass('android.content.pm.PackageInfo');  
						plus.android.importClass('android.content.pm.PackageManager');  
						
						// 获取应用主Activity实例对象
						let MainActivity = plus.android.runtimeMainActivity(); 
						 
						// 获取 PackageManager 对象
						let PackageManager = MainActivity.getPackageManager();  
						
						// 获取 ApplicationInfo 对象
						let ApplicationInfo = MainActivity.getApplicationInfo();
						
						// 调用 PackageManager 对象的 getInstalledPackages 方法传参 0 获取全部已安装应用数组
						let pinfo = plus.android.invoke(PackageManager, 'getInstalledPackages', 0);
						
						let resList = [];
						
						if (pinfo != null) {  
							let Base64 = plus.android.importClass('android.util.Base64');
							let Bitmap = plus.android.importClass('android.graphics.Bitmap');
							let maxSize = 12;
							
							for (let i = 0; i < pinfo.size(); i++) { 
								// 该应用对象
								let p = pinfo.get(i);
								
								// 该应用信息对象
								let info = plus.android.getAttribute(p, 'applicationInfo');
								
								// 通过位与运算符（&）判断该应该是否为系统应用
								let sysAppFlag = plus.android.getAttribute(info, 'flags') & plus.android.getAttribute(ApplicationInfo, 'FLAG_SYSTEM');
								
								if (sysAppFlag == 0) { // 非系统应用
									//console.log('======== ', plus.android.invoke(plus.android.getAttribute(pinfo.get(i), 'applicationInfo'), 'loadLabel', PackageManager)) // 应用名
									//console.log('======== ', plus.android.invoke(plus.android.getAttribute(pinfo.get(i), 'applicationInfo'), 'loadIcon', PackageManager)) // 图标，需判断null
									//console.log('======== ', plus.android.getAttribute(pinfo.get(i), 'packageName')); // 包名
									//console.log('======== ', plus.android.getAttribute(pinfo.get(i), 'versionName')); // 版本号（含.）
									//console.log('======== ', plus.android.getAttribute(pinfo.get(i), 'versionCode')); // 版本代号（不含.）
									
									let bitmapDrawable = plus.android.invoke(info, 'loadIcon', PackageManager);
									let iconBase64 = null;
									
									if (bitmapDrawable != null) {
										let bitmap = plus.android.invoke(bitmapDrawable, 'getBitmap');
										
										try {
											if (bitmap != null) {
												var baos = plus.android.newObject("java.io.ByteArrayOutputStream");
												plus.android.invoke(bitmap, 'compress', Bitmap.CompressFormat.JPEG, 100, baos);
												plus.android.invoke(baos, 'flush');
												plus.android.invoke(baos, 'close');

												let bitmapBytes = plus.android.invoke(baos, 'toByteArray');
												iconBase64 = 'data:image/png;base64,' + Base64.encodeToString(bitmapBytes, Base64.DEFAULT);
											}
										} catch (e) {
											console.log(e);
										} finally {
											try {
												if (baos != null) {
													plus.android.invoke(baos, 'flush');
													plus.android.invoke(baos, 'close');
												}
											} catch (e) {
												console.log(e);
											}
										}
									}
									
									resList.push({
										appName: plus.android.invoke(info, 'loadLabel', PackageManager),
										appPackage: [plus.android.getAttribute(p, 'packageName')],
										appIcon: iconBase64
									});
									
									if (resList.length >= maxSize) {
										break;
									}
								} else if (plus.android.getAttribute(p, 'packageName') === 'com.android.settings') { // 系统应用中只要原生的 设置
									resList.unshift({
										appName: plus.android.invoke(info, 'loadLabel', PackageManager),
										appPackage: [plus.android.getAttribute(p, 'packageName')],
										appIcon: plus.android.invoke(info, 'loadIcon', PackageManager)
									});
									
									if (resList.length >= maxSize) {
										break;
									}
								}
							}  
						} 
						
						plus.webview.postMessageToUniNView({
							module: e.data.module,
							res: resList
						}, currentWebview.id);
						
					} else if (e.data.module === 'setBackgroundColor') {
						
						let Color = plus.android.importClass('android.graphics.Color');
						let MainActivity = plus.android.runtimeMainActivity();
						let Window = MainActivity.getWindow();
						let DecorView = plus.android.invoke(Window, 'getDecorView');
						let Thread = plus.ios.importClass("java.lang.Thread");
						let Runnable = plus.android.implements("java.lang.Runnable", {
							"run": function() {
								plus.android.invoke(DecorView, 'setBackgroundColor', Color.parseColor('#2C2C2C'));
							}  
						});
						MainActivity.runOnUiThread(Runnable);
						
					} else {
						
						uni.showToast({
							title: '你想用 plus 干嘛？',
							icon: 'none',
							position: 'top'
						});
						
					}
				});
			} catch (err) {
				uni.showToast({
					title: err&&err.message ? err.message : '未知错误',
					icon: 'none',
					position: 'top'
				});
			}
    }
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #2C2C2C;
	}
</style>
