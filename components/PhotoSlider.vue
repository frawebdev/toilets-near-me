<template>
    <slider animation="fade" interval=4000 height="300px">
        <slider-item
            v-for="item in items"
            :key="item"
            :style="item"
        >
        <Photo 
        :photoRef="item.photo_reference"
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