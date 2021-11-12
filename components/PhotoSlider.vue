<template>
    <slider animation="fade" interval=4000 height="300px" :control-btn="false" class="m-4 shadow">
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