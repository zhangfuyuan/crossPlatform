<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
			
			// #ifdef APP-PLUS
			try {
				let FaceDetectManager = plus.android.importClass('com.aiwinn.facedetectsdk.FaceDetectManager');
				//let FaceDetectManager = plus.android.newObject('com.aiwinn.facedetectsdk.FaceDetectManager');
				let Status = plus.android.importClass('com.aiwinn.facedetectsdk.common.Status');
				let main = plus.android.runtimeMainActivity();
				//let context = main.getApplicationContext();
				//console.log('=====context==== ', context);
				//let Context = plus.android.importClass("android.content.Context");
				//let context = plus.android.invoke(Context, 'getApplicationContext');
				//let status = FaceDetectManager.init(plus.android.invoke(main, 'getBasecontext'));
				//console.log('=====getBasecontext==== ', FaceDetectManager.init(main.getActivity()));
				console.log('=====getApplication==== ', FaceDetectManager.init(main.getApplication()));
				//let status = plus.android.invoke(, 'toString');
				//this.txt2 = status + '';
			} catch (e) {
				console.log('=====error==== ', e);
			}
			// #endif
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
