<template>
    <div class="bottom-bar">
		<div class="music-info">
			<img class="music-pic">
			<div class="music-detail">
				<p class="music-name">132465</p>
				<p class="music-singer">12465798</p>
			</div>
		</div>
		<div class="playpause">
			<i class="icon-pause"></i>
		</div>
		<i class="music-list icon-list-music"></i>
	</div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./../../common/stylus/global.styl"
	.bottom-bar
		position:fixed
		z-index:9
		background:#fff
		bottom:0
		height:46px
		padding:5px
		box-sizing:border-box
		left:0
		right:0
		display:flex
		align-items: center
		.music-info
			position:relative
			flex:1 1 auto
			height:100%
			display:flex
			.music-detail
				flex:1 1 auto
				padding: 0 5px
				display:flex
				flex-direction:column
				justify-content:space-around
				@media screen and (max-width: 414px)
					p
						max-width:250px
				@media screen and (max-width: 375px)
					p
						max-width:210px
				@media screen and (max-width: 320px)
					p
						max-width:160px
				@media screen and (min-width: 768px)
					p
						max-width:580px
				p
					width:100%
					margin:0
					text-overflow:ellipsis
					white-space:nowrap
					overflow:hidden
					&.music-name
						font-size:14px
						font-weight:400
						color:#333
						padding:2px 0
					&.music-singer
						color:#aaa
						font-size:10px
						font-weight:400
						padding:2px 0
			.music-pic
				flex:0 0 36px
				width:36px
				height:36px
		.playpause
			border:2px solid #999
			border-radius:50%
			width:24px
			height:24px
			position:relative
			&:active
				background:$list_active
			i
				display:block
				position:absolute
				top:50%
				left:55%
				transform:translate3d(-50%,-50%,0)
				width:22px
				font-size:14px
				color:#333
				text-align:center
				&.icon-pause
					left:50%
					font-size:18px
					color:$primarycolor
		.music-list
			margin-left:10px
			display:block
			flex:0 0 36px
			width:36px
			height:100%
			line-height:36px
			text-align:center
			font-size:26px
			color:#999
			&:active
					background:$list_active
</style>
