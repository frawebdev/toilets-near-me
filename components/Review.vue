<template>
    <div class="w-full h-full flex justify-center content-center items-center">
        <div class="p-2">
        <h2>{{ author }}</h2>
        <star-rating read-only :show-rating="false" star-size=20 v-model="rating"></star-rating>
        <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    props: [
        'author', 
        'text',
        'rating'
    ],
    data()  {
        return {
            rating: this.rating
        }
    },
    components: {
        StarRating
    }
}
</script>