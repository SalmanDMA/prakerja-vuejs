<template>
 <v-container>
  <HeaderVue />
  <slot />
  <FooterVue />
 </v-container>
</template>

<script>
import HeaderVue from '@/components/Header.vue';
import FooterVue from '@/components/Footer.vue';
export default {
 name: 'LayoutDefault',
 components: {
  HeaderVue,
  FooterVue,
 },
};
</script>

<style></style>
