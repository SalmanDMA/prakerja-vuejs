<template>
 <div>
  <div id="nav">
   <nav><router-link to="/" :class="getClassForRoute">Home</router-link></nav>
  </div>
  <router-view />
 </div>
</template>

<script>
export default {
 name: 'DefaultLayout',
 computed: {
  getClassForRoute() {
   if (this.$route.name === 'TodoDetail') {
    return 'router-link-exact-active';
   }
   return '';
  },
 },
};
</script>

<style>
#nav {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
}

nav {
 padding: 30px;
}

nav a {
 font-weight: bold;
 color: #2c3e50;
}

nav a.router-link-exact-active {
 color: #42b983;
}
</style>
