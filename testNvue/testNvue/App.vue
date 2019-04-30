<script>
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
					if (e.data.module === 'mounted') { // 动态设置 focusable 和 focusableInTouchMode
						
						uni.showToast({
							title: '动态设置 focusable 和 focusableInTouchMode 成功！'
						});
						
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
