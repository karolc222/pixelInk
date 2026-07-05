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


<style scoped>
.card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
    transition: transform .25s ease;
}

.card:hover {
    transform: translateY(-6px);
}

.category {
    color: #ec4899;
    font-size: .85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
}

h2 {
    margin: 1rem 0;
    color: #111827;
}

p {
    color: #6b7280;
    line-height: 1.5;
}

span {
    display: inline-block;
    margin-top: 1.5rem;
    color: #9ca3af;


}


</style>