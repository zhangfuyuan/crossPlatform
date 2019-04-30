<script>
	import {
		Mac,
		getIp
	} from '@/common/util.js';
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
					 if (plus) {  
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
											title: error.message
										});
									} );
								}
							}
						} else {
							uni.showToast({
								title: '调启外部应用失败！'
							});
						}
						
					} else {
						
						uni.showToast({
							title: '你想用 plus 干嘛？'
						});
						
					}
				});
			} catch (err) {
				uni.showToast({
					title: err
				});
			}
        }
	}
</script>

<style>
	/*每个页面公共css */
</style>
