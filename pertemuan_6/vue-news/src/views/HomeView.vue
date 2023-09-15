<template>
 <div class="home">
  <h1>Berita Terkini</h1>
  <div v-if="loading">
   <p class="loading">Sedang Memuat.... Mohon Tunggu....</p>
  </div>
  <div v-else-if="errors">
   {{ errors }}
  </div>
  <div v-else>
   <articleList @handleSearch="handleSearch" />
  </div>
 </div>
</template>

<script>
import articleList from '@/components/ArticleList.vue';
export default {
 name: 'HomeView',
 data() {
  return {
   searchQuery: '',
  };
 },
 components: {
  articleList,
 },
 methods: {
  handleSearch(value) {
   this.searchQuery = value;
  },
 },
 computed: {
  loading() {
   return this.$store.state.article.loading;
  },
  errors() {
   return this.$store.state.article.errors;
  },
 },
 mounted() {
  this.$store.dispatch('article/getArticles');
 },
 watch: {
  searchQuery(newSearchQuery) {
   this.$store.dispatch('article/getArticles', newSearchQuery);
  },
 },
};
</script>

<style scoped>
h1 {
 text-align: center;
}
.loading {
 text-align: center;
}
</style>
