<template>
    <div class="header">
        <div class="centermenu">
            <router-link tag="i" to="/mymusic">
                <i class="music icon-music"></i>
            </router-link>
            <router-link tag="i" to="/findmusic">
                <i class="find icon-wangyi"></i>
            </router-link>
            <router-link tag="i" to="/community">
               <i class="community icon-community"></i>
            </router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../../static/font-icon/style.css"
@import "../../common/stylus/global.styl"
.header
    position relative
    width 100%
    height 50px
    line-height 50px
    background-color #c62f2f
    text-align: center;
    .centermenu
        display inline
        text-align center
        font-size 24px
        i
            margin 0 5px
            color #eee
            &.router-link-active
                i
                    color $link_active
            &.active
                color #4AE0A8
            &.music
                font-size 22px
</style>
