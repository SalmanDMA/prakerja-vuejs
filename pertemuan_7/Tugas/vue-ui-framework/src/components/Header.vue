<template>
 <div>
  <v-toolbar color="cyan" dark>
   <v-app-bar-nav-icon @click="toggleDrawer" v-if="windowWidth < 600"></v-app-bar-nav-icon>

   <v-toolbar-title>News App</v-toolbar-title>

   <v-spacer></v-spacer>
  </v-toolbar>
  <v-navigation-drawer v-model="drawer" app disable-resize-watcher>
   <v-list nav dense>
    <v-list-item-group active-class="deep-purple--text text--accent-4">
     <v-list-item @click="toggleDrawer">
      <v-btn icon class="ml-auto">
       <v-icon>mdi-close</v-icon>
      </v-btn>
     </v-list-item>

     <v-list-item @click="navigateTo('home')">
      <v-list-item-title>Home</v-list-item-title>
     </v-list-item>

     <v-list-item @click="navigateTo('article')">
      <v-list-item-title>Article</v-list-item-title>
     </v-list-item>

     <v-list-item @click="navigateTo('about')">
      <v-list-item-title>About</v-list-item-title>
     </v-list-item>
    </v-list-item-group>
   </v-list>
  </v-navigation-drawer>
 </div>
</template>

<script>
export default {
 name: 'HeaderVue',
 data() {
  return {
   drawer: false,
   windowWidth: window.innerWidth,
  };
 },
 mounted() {
  window.addEventListener('resize', this.handleResize);
 },

 beforeDestroy() {
  window.removeEventListener('resize', this.handleResize);
 },
 methods: {
  toggleDrawer() {
   this.drawer = !this.drawer;
  },
  navigateTo(page) {
   this.$router.push({ name: page });
   this.drawer = false;
  },
  handleResize() {
   this.windowWidth = window.innerWidth;
  },
 },
};
</script>

<style></style>
