<template>
    <section class="featured">

        <div class="content">

            <p class="category">
                {{ category }}
            </p>

            <h2>
                {{ title }}
            </h2>

            <p class="description">
                {{ description }}
            </p>

            <div class="meta">
                <span>{{ author }}</span>
                <span>•</span>
                <span>{{ readingTime }}</span>
            </div>

            <button>
                Read article
            </button>
        </div>

        <div class="image">
        </div>
    </section>
</template>



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

    author: {
        type: String,
        required: true
    },

    readingTime: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }
})
</script>


<style scoped>

.featured {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 75rem;
    margin: 5rem auto;
    padding: 3rem;

    gap: 4rem;

    background: white;
    border-radius: 1.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,.06);
}

.content {
    flex: 1;
}

.image {
    width: 24rem;
    height: 18rem;
    background: #fde7f2;
    border-radius: 1rem;
}

.category {
    color: #ec4899;
    text-transform: uppercase;
    letter-spacing: .12rem;
    font-size: .9rem;
    font-weight: 700;
}

h2 {
    font-size: 3rem;
    line-height: 1.1;
    margin: 1rem 0;
    color: #111827;
}

.description {
    color: #6b7280;
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

button{
    margin-top: 2rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: .7rem;
    background: #ec4899;
    color: white;
    cursor: pointer;
}

button:hover {
    background: #db2777;
}

</style>