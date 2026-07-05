<template>
  <section class="hero">
    <div class="hero">
      <p class="hero-content"></p>

      <h1>Digital publishing</h1>

      <p class="subtitle">
        The newest articles about technology, UX, software engineering and publishing.
      </p>

      <button>Read latest stories</button>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  background: #fff;
  padding: 8rem 2rem;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
}

.tag {
  color: #ec4899;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}

h1 {
  font-size: 4rem;
  line-height: 1.1;
  color: #111827;
  margin: 1.5rem 0;
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #6b7280;
  max-width: 550px;
}

button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background: #ec4899;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #db2777;
}
</style>
