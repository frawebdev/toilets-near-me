<template>
    <slider animation="fade" interval=8000 height="200px" :control-btn="false" class="m-4 shadow">
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