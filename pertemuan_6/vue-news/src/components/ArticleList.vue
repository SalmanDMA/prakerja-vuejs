<template>
 <div class="article-list">
  <div class="search-bar">
   <input type="text" v-model="searchQuery" placeholder="Cari Artikel Baru" />
   <button type="button" @click="handleSearch">Cari</button>
  </div>
  <div class="article-cards">
   <div v-for="(article, index) in paginatedArticles" :key="index" class="article-card">
    <div class="article-thumbnail">
     <img :src="article.urlToImage" alt="Gambar Artikel" />
    </div>
    <div class="article-info">
     <div class="article-title">{{ article.title }}</div>
     <div class="article-author">{{ article.author }}</div>
     <div class="article-date">{{ formatDateTime(article.publishedAt) }}</div>
     <router-link :to="'/' + index">Baca Selengkapnya</router-link>
    </div>
   </div>
  </div>
  <div class="pagination">
   <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
   <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
 </div>
</template>

<script>
import { formatDate } from '@/utils/utils';
export default {
 data() {
  return {
   perPage: 10,
   currentPage: 1,
   searchQuery: '',
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
 },
};
</script>

<style scoped>
.article-list {
 display: flex;
 flex-direction: column;
 align-items: center;
}

.search-bar {
 width: 100%;
 max-width: 400px;
 margin-bottom: 20px;
 display: flex;
 justify-content: center;
}

input[type='text'] {
 width: 100%;
 padding: 1rem;
 font-size: 1rem;
 border: 1px solid #ddd;
 border-radius: 5px;
}

.article-cards {
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
}

.article-card {
 width: calc(30% - 20px);
 margin: 10px;
 background-color: #fff;
 border: 1px solid #ddd;
 border-radius: 5px;
 box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
 transition: transform 0.3s ease-in-out;
}

.article-card:hover {
 transform: translateY(-5px);
}

.article-thumbnail {
 width: 100%;
 height: auto;
}

.article-thumbnail img {
 width: 100%;
 height: 200px;
}

.article-info {
 padding: 15px;
 text-align: left;
 display: flex;
 flex-direction: column;
}

.article-title {
 font-size: 1.2rem;
 font-weight: bold;
 margin-bottom: 5px;
}

.article-author,
.article-date {
 font-size: 0.9rem;
 color: #555;
}

a {
 text-decoration: none;
 color: #007bff;
 margin-top: 5px;
}

a:hover {
 text-decoration: underline;
}

.pagination {
 margin-top: 20px;
 display: flex;
 justify-content: center;
}

button {
 background-color: #007bff;
 color: #fff;
 padding: 5px 15px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 margin: 0 5px;
 transition: background-color 0.3s ease-in-out;
}

button:hover {
 background-color: #0069d9;
}

button:disabled {
 background-color: #ccc;
 cursor: not-allowed;
}

@media (max-width: 768px) {
 .article-card {
  width: calc(40% - 20px);
 }
}

@media (max-width: 480px) {
 .article-card {
  width: 100%;
 }
}
</style>
