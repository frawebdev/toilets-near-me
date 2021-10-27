<template>
    <div>
        <div v-for="review in reviews" :key="review.time">
            <h2>
                {{ review.author_name }}
            </h2>
            <star-rating read-only :show-rating="false" v-model="review.rating"></star-rating>
            <p>
                {{ review.text }}
            </p>
            <p>
                {{ review.relative_time_description }}
            </p>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    props: ['reviews'],
    components: {
        StarRating
    }
}
</script>