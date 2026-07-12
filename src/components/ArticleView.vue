<script setup>
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
    <p>{{ article.readingTime }}</p>

    <article>
      {{ article.content }}
    </article>
  </main>
</template>