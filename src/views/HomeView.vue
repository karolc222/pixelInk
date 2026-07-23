<script setup>
import { ref, computed } from 'vue'

import HeroBanner from '../components/HeroBanner.vue'
import AppNavbar from '../components/AppNavbar.vue'
import ArticleCard from '../components/ArticleCard.vue'
import articles from '../data/articles'
import FeaturedArticle from '../components/FeaturedArticle.vue'
import SiteFooter from '../components/SiteFooter.vue'

const search = ref('')

const featuredArticle = computed(() => {
  return articles[0]
})

const filteredArticles = computed(() => {
  return articles.filter((article) =>
    article.title.toLowerCase().includes(search.value.toLowerCase()),
  )
})
</script>

<template>
  <AppNavbar />
  <HeroBanner />

  <FeaturedArticle
    :category="featuredArticle.category"
    :title="featuredArticle.title"
    :description="featuredArticle.description"
    :author="featuredArticle.author"
    :readingTime="featuredArticle.readingTime"
    :image="featuredArticle.image"
  />

  <div class="search">
    <input type="text" placeholder="Search articles..." v-model="search" />
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

  <SiteFooter />
</template>

<style scoped lang="scss">
@use "../styles/variables" as *;

.articles {
  max-width: $content-width;
  margin: 4rem auto;
  padding: 0 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.search {
  max-width: $content-width;
  margin: 2rem auto;
  padding: 0 2rem;
}

.search input {
  width: 100%;
  padding: 1rem;
  border: 1px solid $border;
  border-radius: $border-radius;
  font-size: 1rem;
  outline: none;
  background: $background;
  color: $text-dark;
}

.search input::placeholder {
  color: $text-muted;
}

.search input:focus {
  border-color: $primary;
}

</style>
