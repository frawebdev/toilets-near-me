<template>
<main>
<div v-if="toiletData">
    <nuxt-link :to="'/singletoilet/' + toiletData.place_id">
    <li class="mx-2 my-6 p-4 flex flex-row items-center justify-between shadow">
        <div>
        <h2 class="mb-3">{{ toiletData.name }}</h2>
        <div class="flex flex-row items-end">
        <star-rating read-only :show-rating="false" star-size=20 v-model="rating"></star-rating>
        <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full ml-4">{{ toiletData.user_ratings_total }}</span>
        </div>
        </div>
    </li>
    </nuxt-link>
</div>
<div v-else>
    <p>Loading...</p>
</div>
</main>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    props: ['toiletData'],
    data() {
        return {
            rating: this.toiletData.rating
        }
    },
    components: {
        StarRating
    }
}
</script>