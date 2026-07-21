<script setup>
defineProps({
    category: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    readingTime: {
        type: String,
        required: true
    }
})
</script>


<template>
    <div class="card">
        <p class="category">{{ category }}</p>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <span>{{ readingTime }}</span>
    </div>
</template>


<style scoped lang="scss">
@use "../styles/variables" as *;

.card {
    background: $background;
    padding: 2rem;
    border-radius: $border-radius;
    box-shadow: $card-shadow;
    transition: transform .25s ease;
    border: 1px solid $border;
}

&:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0,0,0,.8 );
}

.category {
    color: $primary-dark;
    font-size: .85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
}

h2 {
    margin: 1rem 0;
    color: $text-dark;
}

p {
    color: $text-light;
    line-height: 1.5rem;
}

span {
    display: inline-block;
    margin-top: 1.5rem;
    color: $text-muted;
}

</style>