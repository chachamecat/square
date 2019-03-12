<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
     <v-toolbar-title v-text="appName"></v-toolbar-title>
<v-spacer></v-spacer>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
  },
  methods: {
    movie () {
      this.$router.push({ path: '/page1' })
    },
    music () {
      this.$router.push({ path: '/page2' })
    }
  },
  computed: {
    appName () {
      return this.$store.getters.appTitle
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
