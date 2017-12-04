<template>
    <div class="mymusic">
        <type-list name="我的音乐" iconinfo="icon-music" count="28" :playing="true"></type-list>
        <type-list name="最近播放" iconinfo="icon-zuijinplay" count="18"></type-list>
        <type-list name="我的电台" iconinfo="icon-diantai" count="1"></type-list>
        <type-list name="我的收藏" iconinfo="icon-collect" count="3" :has-border="false"></type-list>
    </div>
</template>

<script type="text/ecmascript-6">
import typeList from '../type-list/type-list';
export default {
  components: {
    typeList: typeList
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
