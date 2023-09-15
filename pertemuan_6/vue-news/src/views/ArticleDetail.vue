<template>
 <div class="article-detail">
  <img :src="getArticle.urlToImage" :alt="getArticle.title" class="article-image" />
  <div class="article-content">
   <h1 class="article-title">{{ getArticle.title }}</h1>
   <div class="article-meta">
    <span class="article-author">{{ getArticle.author }}</span>
    <span class="article-date">{{ formatDate(getArticle.publishedAt) }}</span>
   </div>
   <p class="article-description">{{ getArticle.description }}</p>
   <p class="article-link">Lanjutkan baca ke sini <a :href="getArticle.url">Sini</a></p>
   <button type="button" class="back-button" @click="handleButtonBack">Kembali</button>
  </div>
 </div>
</template>

<script>
import { formatDate } from '@/utils/utils';
export default {
 name: 'ArticleDetail',
 computed: {
  getArticle() {
   const id = this.$route.params.id;
   return this.$store.state.article.article[id];
  },
 },
 methods: {
  formatDate(dateString) {
   return formatDate(dateString);
  },
  handleButtonBack() {
   this.$router.back();
  },
 },
};
</script>

<style scoped>
.article-detail {
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 20px;
}

.article-content {
 width: 100%;
 max-width: 800px;
}

.article-image {
 width: 100%;
 max-width: 1000px;
 height: auto;
 margin-bottom: 20px;
}

.article-title {
 font-size: 24px;
 font-weight: bold;
 margin-bottom: 10px;
}

.article-meta {
 font-size: 14px;
 color: #777;
 margin-bottom: 10px;
 display: flex;
 align-items: center;
 justify-content: space-between;
}

.article-description {
 font-size: 16px;
 margin-bottom: 20px;
}

.article-link a {
 color: #007bff;
 text-decoration: none;
}

.back-button {
 background-color: #007bff;
 color: #fff;
 border: none;
 padding: 10px 20px;
 font-size: 16px;
 cursor: pointer;
 transition: background-color 0.3s;
}

.back-button:hover {
 background-color: #0056b3;
}
</style>
