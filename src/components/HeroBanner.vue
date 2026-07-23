<template>
  <section class="hero">
    <div class="hero-content">

      <p class="tag">Digital publishing</p>

      <h1>
        Stories designed for the curious minds.
      </h1>

      <p class="subtitle">
        Exploring technology, software engineering, UX and digital publishing.
      </p>

      <button>Read latest stories</button>
    </div>
  </section>
</template>

<script setup></script>


<style scoped lang="scss">
@use "../styles/variables" as *;

.hero {
  background: $background;
  padding: 8rem 2rem;
}

.hero-content {
  max-width: $content-width;
  margin: 0 auto;
}

.tag {
  color: $primary-dark;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}

h1 {
  font-size: 4rem;
  line-height: 1.1;
  color: $text-dark;
  margin: 1.5rem 0;
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  line-height: 1.8;
  color: $text-light;
  max-width: 600px;
}

button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background: $primary;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

&:hover {
  background: $primary-dark;
}
</style>
