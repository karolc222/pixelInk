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