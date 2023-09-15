<template>
 <v-footer color="cyan" dark>
  <v-card width="100%" flat tile class="cyan white--text text-center">
   <v-card-text class="white--text"> Let's Connect With Me </v-card-text>
   <v-card-text>
    <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4 white--text" icon>
     <v-icon size="24px" @click="handleIconClick(icon.link)">
      {{ icon.icon }}
     </v-icon>
    </v-btn>
   </v-card-text>
   <v-divider></v-divider>
   <v-card-text class="white--text"> &copy; Salman DMA {{ new Date().getFullYear() }} — Made With ❤ Using <strong>Vue</strong> and <strong>Vuetify</strong> </v-card-text>
  </v-card>
 </v-footer>
</template>

<script>
export default {
 name: 'FooterVue',
 data: () => ({
  icons: [
   {
    icon: 'mdi-facebook',
    link: 'https://www.facebook.com',
   },
   {
    icon: 'mdi-twitter',
    link: 'https://www.twitter.com',
   },
   {
    icon: 'mdi-linkedin',
    link: 'https://www.linkedin.com',
   },
   {
    icon: 'mdi-instagram',
    link: 'https://www.instagram.com',
   },
  ],
 }),
 methods: {
  handleIconClick(link) {
   window.open(link, '_blank');
  },
 },
};
</script>

<style></style>
