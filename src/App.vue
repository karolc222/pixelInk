<script setup>
import { ref, computed } from 'vue'

import HeroBanner from './components/HeroBanner.vue'
import AppNavbar from './components/AppNavbar.vue'
import ArticleCard from './components/ArticleCard.vue'
import articles from './data/articles'

const search = ref('')

const filteredArticles = computed(() => {
  return articles.filter(article =>
    article.title
      .toLowerCase()
      .includes(search.value.toLowerCase())
      )
})
</script>


<template>
  <AppNavbar />
  <HeroBanner />

  <div class="search">
    <input
      type="text"
      placeholder="Search articles..."
      v-model="search"
    />
  </div>

  <section class="articles">
  <ArticleCard
    v-for="article in filteredArticles"
    :key="article.id"
    :category="article.category"
    :title="article.title"
    :description="article.description"
    :readingTime="article.readingTime"
  />
</section>

</template>

<style scoped>
.articles {
  max-width: 75rem;
  margin: 4rem auto;
  padding: 0 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.search {
  max-width: 75rem;
  margin: 2rem auto;
  padding: 0 2rem;
}

.search input {
  width: 100%;
  padding: 1rem;
  border: 1px solid #f3c4db;
  border-radius: 0.75rem;
  font-size: 1rem;
  outline: none;
}

.search input:focus {
  border-color: #ec4899;
}
</style>
