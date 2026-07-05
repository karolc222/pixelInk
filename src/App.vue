<script setup>
import HeroBanner from './components/HeroBanner.vue'
import Navbar from './components/AppNavbar.vue'
import ArticleCard from './components/ArticleCard.vue'
</script>

<template>
  <Navbar />
  <HeroBanner />

  <section class="articles">
  <ArticleCard
    v-for="article in articles"
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
}
</style>
