<template>
 <LayoutDefault>
  <v-container class="article-detail">
   <v-row>
    <v-col cols="12" md="6" offset-md="3">
     <v-img :src="getArticle.urlToImage" :alt="getArticle.title" class="article-image" fluid></v-img>
     <h1 class="article-title">{{ getArticle.title }}</h1>
     <v-row class="article-meta">
      <v-col cols="6">
       <span class="article-author">{{ getArticle.author }}</span>
      </v-col>
      <v-col cols="6" class="text-right">
       <span class="article-date">{{ formatDate(getArticle.publishedAt) }}</span>
      </v-col>
     </v-row>
     <p class="article-description">{{ getArticle.description }}</p>
     <p class="article-link">Lanjutkan baca ke sini <a :href="getArticle.url">Sini</a></p>
     <v-btn @click="handleButtonBack" color="primary">Kembali</v-btn>
    </v-col>
   </v-row>
  </v-container>
 </LayoutDefault>
</template>

<script>
import { formatDate } from '@/utils/utils';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
export default {
 name: 'ArticleDetail',
 components: {
  LayoutDefault,
 },
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
 padding: 20px;
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
}

.article-description {
 font-size: 16px;
 margin-bottom: 20px;
}

.article-link a {
 color: #007bff;
 text-decoration: none;
}

.v-btn {
 margin-top: 20px;
}
</style>
