<template>
 <v-container>
  <v-row justify-sm="center">
   <v-col cols="12" sm="8" md="5">
    <v-text-field v-model="searchQuery" label="Cari Berita Baru"></v-text-field>
   </v-col>
   <v-col cols="12" sm="1" align-self="center">
    <v-btn @click="handleSearch" color="primary" dark block>Cari</v-btn>
   </v-col>
  </v-row>

  <v-row>
   <!-- Bagian Kategori -->
   <v-col cols="12" md="3">
    <div class="categories">
     <v-col cols="12">
      <p class="text-left mb-0">Cari Berita Berdasarkan Kategori Populer Ini</p>
     </v-col>
     <v-col v-for="(category, index) in categories" :key="index" cols="12" md="12">
      <v-card @click="selectCategory(category.id)" class="pa-2" elevation="2">
       {{ category.name }}
      </v-card>
     </v-col>
    </div>
   </v-col>

   <!-- Bagian Card Artikel -->
   <v-col v-for="(article, index) in paginatedArticles" :key="index" cols="12" sm="6" md="4" lg="3">
    <v-card class="pa-4" elevation="2">
     <v-img :src="article.urlToImage" alt="Gambar Artikel" height="200px"></v-img>
     <div class="article-info">
      <div class="article-title">{{ article.title }}</div>
      <div class="article-author">{{ article.author }}</div>
      <div class="article-date">{{ formatDateTime(article.publishedAt) }}</div>
      <v-btn :to="'/' + index" color="primary" small class="mt-2">Baca Selengkapnya</v-btn>
     </div>
    </v-card>
   </v-col>
  </v-row>

  <v-row>
   <v-col cols="12" class="text-center">
    <v-btn @click="prevPage" :disabled="currentPage === 1" color="primary" small class="mr-6">Previous</v-btn>
    <v-btn @click="nextPage" :disabled="currentPage === totalPages" color="primary" small>Next</v-btn>
   </v-col>
  </v-row>
 </v-container>
</template>

<script>
import { formatDate } from '@/utils/utils';
export default {
 data() {
  return {
   perPage: 10,
   currentPage: 1,
   searchQuery: '',
   categories: [
    { name: 'Bitcoin', id: 'bitcoin' },
    { name: 'Tech', id: 'tech' },
    { name: 'Car', id: 'car' },
    { name: 'House', id: 'house' },
    { name: 'Phone', id: 'phone' },
   ],
   isSmallScreen: false,
  };
 },
 computed: {
  articles() {
   return this.$store.state.article.article;
  },
  paginatedArticles() {
   const startIndex = (this.currentPage - 1) * this.perPage;
   const endIndex = startIndex + this.perPage;
   return this.articles.slice(startIndex, endIndex);
  },
  totalPages() {
   return Math.ceil(this.articles.length / this.perPage);
  },
 },
 methods: {
  prevPage() {
   if (this.currentPage > 1) {
    this.currentPage--;
   }
  },
  nextPage() {
   if (this.currentPage < this.totalPages) {
    this.currentPage++;
   }
  },
  formatDateTime(dateString) {
   return formatDate(dateString);
  },
  handleSearch() {
   this.$emit('handleSearch', this.searchQuery);
  },

  checkScreenSize() {
   this.isSmallScreen = window.innerWidth <= 768;
  },
  selectCategory(id) {
   this.$emit('selectCategory', id);
  },
 },
 created() {
  window.addEventListener('resize', this.checkScreenSize);
  this.checkScreenSize();
 },
 beforeDestroy() {
  window.removeEventListener('resize', this.checkScreenSize);
 },
};
</script>

<style scoped>
.article-info {
 text-align: left;
}

.article-title {
 margin-top: 5px;
 font-size: 1.2rem;
 font-weight: bold;
 margin-bottom: 5px;
 display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
 overflow: hidden;
}

.article-author,
.article-date {
 font-size: 0.9rem;
 color: #555;
 display: -webkit-box;
 -webkit-line-clamp: 1;
 -webkit-box-orient: vertical;
 overflow: hidden;
}
.categories {
 background-color: #f0f0f0;
 padding: 10px;
 border-radius: 5px;
}
</style>
