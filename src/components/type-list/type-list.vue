<template>
    <div class="typelist">
        <i class="info" :class="iconinfo"></i>
        <div class="typelist-detail">
            <span class="name">1121221</span>
            <span class="count">222</span>
            <p class="border-1px"></p>
            <i class="isPlaying icon-volume-medium"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    iconinfo: {
      type: String
    }
  },
  created() {
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './../../common/stylus/border-1px/index.styl'
@import './../../common/stylus/global.styl'
.typelist
    height 50px
    background #f7f7f7
    position relative
    &:active
        background $list_active
    .info
        font-size 20px
        position absolute
        top 50%
        color $primarycolor
        left 15px
        transform translate(0, -50%)
    .typelist-detail
        height 100%
        line-height 50px
        margin-left 50px
        box-sizing border-box
        font-size 0
        .name
            color #333
            font-size 14px
            margin-right 6px
            vertical-align middle
        .count
            color #aaa
            font-size 10px
            font-weight 400
            vertical-align middle
        .border-1px
            border-1px($border_1px)
    .isPlaying
        font-size 14px
        position absolute
        top 50%
        color $primarycolor
        right 5px
        width 36px
        height 36px
        line-height 36px
        text-align center
        transform translate(0, -50%)
        &:active
            background $list_active
</style>
