<template>
<main>
<div v-if="toiletData">
    <li>
        <star-rating read-only :show-rating="false" v-model="rating"></star-rating>
        <nuxt-link :to="'/singletoilet/' + toiletData.place_id">go</nuxt-link>
    </li>
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