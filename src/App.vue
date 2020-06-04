<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "../static/css/style.css";
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
