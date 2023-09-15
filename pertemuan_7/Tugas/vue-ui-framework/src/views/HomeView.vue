<template>
 <LayoutDefaultVue>
  <v-container>
   <v-row justify="center">
    <v-col cols="12">
     <h1 class="display-2 text-center">Berita Terkini</h1>
    </v-col>
   </v-row>

   <v-row justify="center" v-if="loading">
    <v-col cols="12">
     <p class="loading text-center">Sedang Memuat.... Mohon Tunggu....</p>
    </v-col>
   </v-row>

   <v-row justify="center" v-else-if="errors">
    <v-col cols="12">
     <p class="error text-center">{{ errors }}</p>
    </v-col>
   </v-row>

   <v-row justify="center" v-else-if="dataNotFound">
    <v-col cols="12">
     <p class="loading text-center">Data Tidak Ditemukan, Silahkan Cari Keyword Yang Lain</p>
    </v-col>
   </v-row>

   <v-row justify="center" v-else>
    <v-col cols="12">
     <ArticleList @handleSearch="handleSearch" @selectCategory="handleCategory" />
    </v-col>
   </v-row>
  </v-container>
 </LayoutDefaultVue>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue';
import LayoutDefaultVue from '@/layouts/LayoutDefault.vue';
export default {
 name: 'HomeView',
 data() {
  return {
   searchQuery: '',
   selectCategory: '',
  };
 },
 components: {
  ArticleList,
  LayoutDefaultVue,
 },
 methods: {
  handleSearch(value) {
   this.searchQuery = value;
  },
  handleCategory(value) {
   this.selectCategory = value;
  },
 },
 computed: {
  loading() {
   return this.$store.state.article.loading;
  },
  errors() {
   return this.$store.state.article.errors;
  },
  dataNotFound() {
   return this.$store.state.article.article.length === 0;
  },
 },
 mounted() {
  this.$store.dispatch('article/getArticles');
 },
 watch: {
  searchQuery(newSearchQuery) {
   this.$store.dispatch('article/getArticles', newSearchQuery);
  },
  selectCategory(newSelectCategory) {
   this.$store.dispatch('article/getArticles', newSelectCategory);
  },
 },
};
</script>

<style>
.loading {
 font-size: 18px;
 color: #007bff;
 margin-top: 20px;
}

.error {
 font-size: 18px;
 color: red;
 margin-top: 20px;
}
</style>
