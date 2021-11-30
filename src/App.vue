<template>
  <div id="app">
    <eportfolio-preview />
  </div>
</template>

<script>
import EportfolioPreview from "./pages/EportfolioPreview.vue";
export default {
  name: "App",
  components: { EportfolioPreview },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
