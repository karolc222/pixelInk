<script setup>
import { calculateReadingTime } from '../utils/readingTime'
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <main class="article">
    <p>{{ article.category }}</p>
    <h1>{{ article.title }}</h1>
    <p>{{ calculateReadingTime(article.wordCount) }}</p>

    <article>
      {{ article.content }}
    </article>
  </main>
</template>