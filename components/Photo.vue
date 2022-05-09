<template>
    <div>
        <img :src="'https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=' + photoRef + '&key=KEY'">
    </div>
</template>

<script>
export default {
    props: [
        'photoRef',
    ]
}
</script>
