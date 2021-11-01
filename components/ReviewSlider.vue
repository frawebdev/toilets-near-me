<template>
    <slider animation="fade" interval=8000 height="300px">
        <slider-item
            v-for="item in items"
            :key="item"
            :style="item"
        >
        <Review 
        :author="item.author_name"
        :rating="item.rating"
        :text="item.text"
        />
        </slider-item>
    </slider>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
    props: ['items'],
    components: {
        Slider,
        SliderItem
    }
}
</script>