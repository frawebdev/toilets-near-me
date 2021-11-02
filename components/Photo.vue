<template>
    <div>
        <img :src="'https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=' + photoRef + '&key=AIzaSyDOe9lVLhQt8Vo3zPXxMO0nRP1TcTNnpiE'">
    </div>
</template>

<script>
export default {
    props: [
        'photoRef',
    ]
}
</script>