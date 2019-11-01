<template>
	<view class="content">
		<scroll-view class="floor-list" scroll-y>
			<view class="scoll-wrapper" style="height: 1000px;">
				<image class="logo" src="/static/logo.png"></image>
				<view>
					<text class="title">{{title}}</text>
					<cover-view class="controls-title">简单的自定义 controls</cover-view>
					<button type="primary">页面主操作 Normal</button>
					<editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady"></editor>
					<input id="sss" class="uni-input" placeholder="禁用" />
					<label class="label-2-text" for="sss">labellabel</label>
					<textarea placeholder-style="color:#F76260" placeholder="占位符字体是红色的" auto-height />
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				placeholder: '开始输入...'
			}
		},
		onLoad() {
			console.log('首页来了！');
		},
		methods: {
			onEditorReady() {
					uni.createSelectorQuery().select('#editor').context((res) => {
							this.editorCtx = res.context
					}).exec()
			},
			onReady() {
				
			}
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
