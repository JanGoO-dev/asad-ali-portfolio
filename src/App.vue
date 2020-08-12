<template>
  <div id="app">
    <HeaderNavigation></HeaderNavigation>
    <router-view />
  </div>
</template>

<script>
import HeaderNavigation from "@/components/HeaderNavigation.vue";
export default {
  components: {
    HeaderNavigation
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #1e152a;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
</style>
