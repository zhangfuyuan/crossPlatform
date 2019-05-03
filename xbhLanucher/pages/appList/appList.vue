<template>
	<view class="appList-wrap">
		<view class="app" 
					v-if="appList&&appList.length>0" 
					v-for="(app, index) in appList" 
					:key="index" 
					@click="launchApp(app.appPackage)">
				<image class="app-img" 
							 mode="widthFix" 
							 :src="app.appIcon || '/static/logo.png'"
							 @error="imageError"></image>
				<text class="app-txt">{{app.appName}}</text>
		</view>
	</view>
</template>

<script>
	export default {
    data() {
        return {
            appList: []
        }
    },
		created() {
			try{
				// 引入依赖类包
				plus.android.importClass('java.util.ArrayList');  
				plus.android.importClass('android.content.pm.ApplicationInfo');
				plus.android.importClass('android.content.pm.PackageInfo');  
				plus.android.importClass('android.content.pm.PackageManager');
				let Bitmap = plus.android.importClass('android.graphics.Bitmap');
				
				// 获取应用主Activity实例对象
				let MainActivity = plus.android.runtimeMainActivity(); 
				
				let Environment = plus.android.importClass('android.os.Environment');
				let sdRoot = Environment.getExternalStorageDirectory();
				console.log('=========', plus.io.convertLocalFileSystemURL('/static/icons/'));
				// 获取 PackageManager 对象
				let PackageManager = MainActivity.getPackageManager();  
				
				// 获取 ApplicationInfo 对象
				let ApplicationInfo = MainActivity.getApplicationInfo();
				
				// 调用 PackageManager 对象的 getInstalledPackages 方法传参 0 获取全部已安装应用数组
				let pinfo = plus.android.invoke(PackageManager, 'getInstalledPackages', 0);
				
				if (pinfo != null) {  
					let maxSize = 12;
					
					for (let i=0,size=pinfo.size(); i<size; i++) { 
						// 该应用对象
						let p = pinfo.get(i);
						
						// 该应用信息对象
						let info = plus.android.getAttribute(p, 'applicationInfo');
						
						// 通过位与运算符（&）判断该应该是否为系统应用
						let sysAppFlag = plus.android.getAttribute(info, 'flags') & plus.android.getAttribute(ApplicationInfo, 'FLAG_SYSTEM');
						
						// 获取应用包名
						let packageName = plus.android.getAttribute(p, 'packageName');
						
						if (sysAppFlag==0 || packageName==='com.android.settings') { // 非系统应用 和 系统应用中只要原生的 设置
							// 获取应用名称
							let appName = plus.android.invoke(info, 'loadLabel', PackageManager);
							
							// 获取应用图标并转成 Bitmap 对象
							let bitmapDrawable = plus.android.invoke(info, 'loadIcon', PackageManager);
							let iconFile = bitmapDrawable ? '/static/icons/'+appName+'.png' : '';
						
							if (bitmapDrawable != null) {
								//let file = plus.android.newObject('java.io.File', plus.io.convertLocalFileSystemURL(iconFile));
								let file = plus.android.newObject('java.io.File', '/storage/emulated/0/Android/data/com.xbh.lanucher/apps/__UNI__B2AB656/www'+iconFile);
								
								if(!plus.android.invoke(file, 'exists')){
									try{
										let bitmap = plus.android.invoke(bitmapDrawable, 'getBitmap');
										let out = plus.android.newObject('java.io.FileOutputStream', file);
										
										plus.android.invoke(bitmap, 'compress', Bitmap.CompressFormat.PNG, 100, out);
										plus.android.invoke(out, 'flush');
										plus.android.invoke(out, 'close');
									} catch (e) {
										uni.showToast({
											title: e,
											icon: 'none',
											position: 'top'
										});
									}
								}
							}
						
							if (packageName==='com.android.settings') {
								this.appList.unshift({
									appName: appName,
									appPackage: packageName,
									appIcon: iconFile
								});
							} else {
								this.appList.push({
									appName: appName,
									appPackage: packageName,
									appIcon: iconFile
								});
							}
						}
						
						if (this.appList.length >= maxSize) {
							break;
						}
					}  
				} 
			}catch(e){
				uni.showToast({
					title: e,
					icon: 'none',
					position: 'top'
				});
			}
		},
		mounted() {
			
		},
    methods: {
			imageError: function(e) {
					console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
			launchApp(appPackage) {
				if (plus.runtime.isApplicationExist({pname: appPackage})) {
					plus.runtime.launchApplication({pname: appPackage}, error => {
						uni.showToast({
							title: error.message,
							icon: 'none',
							position: 'top'
						});
					});
				} else {
					uni.showToast({
						title: appPackage + ' 不存在！',
						icon: 'none',
						position: 'top'
					});
				}
			},
    }
	}
</script>

<style scoped>
	.appList-wrap {
		width: 750upx;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.app {
		width: 200upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.app-img {
		width: 48px; 
		height: 48px;
	}
	.app-txt {
		color: #FFFFFF;
		font-size: 16px;
	}
</style>
