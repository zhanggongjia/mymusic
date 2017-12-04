<template>
  <div id="app">
    <v-header :index="2"></v-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './components/header/header';
import footer from './components/footer/footer';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    vHeader: header,
    vFooter: footer
  },
  created() {
    let LocalApi = 'static/data.json';
    axios.get(LocalApi, {}).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/border-1px/index.styl'
@import 'common/stylus/global.styl'
body, html
  margin 0
  padding 0
  width 100%
  height 100%
  box-sizing border-box
  user-select none
  -webkit-tap-highlight-color transparent
  .content
    position absolute
    top 50px
    bottom 50px
    left 0
    width 100%
    background-color #f5f5f5
</style>
