<template>
  <div id="app" class="white-vertion black-bg">
    <nav-bar />
    <eportfolio-preview />
  </div>
</template>

<script>
import EportfolioPreview from "./pages/EportfolioPreview.vue";
import NavBar from "./components/layout/NavBar.vue";
export default {
  name: "App",
  components: { EportfolioPreview, NavBar },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.firstSectionColor {
  /* background-color: aliceblue; */
}
.secondSectionColor {
  background-color: rgb(248, 248, 248);
}
</style>
