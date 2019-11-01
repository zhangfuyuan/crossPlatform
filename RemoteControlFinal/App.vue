<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
			
			// #ifdef APP-PLUS
			let remoteInstance = plus.android.implements('io.dcloud.RemoteControlInterface', {
				'triggerRemoteEvent': function(keyCode) {
					console.log('================ 监听当前按下 keyCode: ' + keyCode);
					uni.$emit('triggerRemote', { remoteCode: keyCode });
				}
			});
			let myPandoraEntryActivity = plus.android.importClass('io.dcloud.MyPandoraEntryActivity');
			myPandoraEntryActivity.setRemoteInstance(remoteInstance);
			let myWebAppActivity = plus.android.importClass('io.dcloud.MyWebAppActivity');
			myWebAppActivity.setRemoteInstance(remoteInstance);
			// #endif
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
