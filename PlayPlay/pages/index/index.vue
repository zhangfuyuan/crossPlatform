<template>
	<view class="content">
		<view>
			<text class="title">{{content}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '日志抓取中...'
			}
		},
		onLoad() {
			console.log('8126.2');
			let that = this;
			let main = plus.android.runtimeMainActivity();
			let running = ['logcat', '-s', '*:D'];
			let Runtime = plus.android.importClass('java.lang.Runtime');
			let mRuntime = Runtime.getRuntime();
			let mExec = plus.android.invoke(mRuntime, 'exec', running);
			const inputStream = plus.android.invoke(mExec, 'getInputStream');
			let PlayPlay = plus.android.importClass('io.dcloud.PlayPlay');
			PlayPlay.setInputStream(inputStream);
			
			try{
				let Runnable = plus.android.implements('java.lang.Runnable', {
					'run': function () {
						try{
							//while (-1 != PlayPlay.readInputStream()) {
							if (-1 != PlayPlay.readInputStream()) {
									let bufferStr = PlayPlay.getBufferString();
									that.content = bufferStr;
							}
						}catch(err){
							console.log('异常：' + (typeof err==='string' ? err : err.message));
						}
					}
				});
				main.runOnUiThread(Runnable);
			}catch(err){
				console.log('异常：' + (typeof err==='string' ? err : err.message));
			}
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
