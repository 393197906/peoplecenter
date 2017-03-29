<template>
  <div id="app">
    <Nav></Nav>
    <div class="right">
      <Loading :ishide="hide"></Loading>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  import Loading from './components/Loading'
  export default {
    name: 'app',
    components: {Nav, Loading},
    data(){
      return {
        hide: true,
      }
    }
  }
</script>

<style>
  .right {
    float: right;
    width: 84%;
    background-color: rgb(245, 248, 250);
    border-radius: 2px;
    position: relative;
  }

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 100%;
  }

  #app:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  a {
    color: #000;
    text-decoration: none;
  }

</style>
