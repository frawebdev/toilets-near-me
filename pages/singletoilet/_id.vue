<template>
<div>
    <main>
        <div id="map" class="h-96 w-full">

        </div>
        <ReviewSlider :items="reviews"/>
        <PhotoSlider :items="photos"/>
        
    </main>
<NavBar />
</div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader'

export default {
    data() {
        return {
            mapLoader: null,
            mapOptions: null,
            lat: null,
            lng: null,
            currentLat: null,
            currentLng: null,
            reviews: null,
            photos: null
        }
    },
    async mounted() {
        await this.$store.dispatch('getSingleToilet', this.$route.params.id)

        this.lat = await this.$store.state.singleToilet.geometry.location.lat
        this.lng = await this.$store.state.singleToilet.geometry.location.lng
        this.reviews = await this.$store.state.singleToilet.reviews
        this.photos = await this.$store.state.singleToilet.photos

        this.currentLat = await this.$store.state.lat
        this.currentLng = await this.$store.state.lng

        setInterval(() => {
            this.$store.dispatch('getCurrentPosition')

            this.currentLat = this.$store.state.lat
            this.currentLng = this.$store.state.lng
        }, 5000)

        this.mapLoader = new Loader({
            apiKey: 'AIzaSyDOe9lVLhQt8Vo3zPXxMO0nRP1TcTNnpiE',
            version: 'weekly',
            libraries: ['places']
        })

        this.mapOptions = {
            center: {
                lat: this.lat,
                lng: this.lng
            },
            zoom: 25
        }

        this.mapLoader.load()
            .then(google => {
                let map = new google.maps.Map(document.getElementById("map"), this.mapOptions)
                
                let directions = new google.maps.DirectionsService()
                let directionsRender = new google.maps.DirectionsRenderer
                directionsRender.setMap(map)

                directions.route({
                    origin: `${ this.currentLat }, ${ this.currentLng }`,
                    destination: ` ${ this.lat }, ${ this.lng } `,
                    travelMode: "WALKING"
                },
                (res, status) => {
                    if(status == 'OK') {
                        directionsRender.setDirections(res)
                    }
                })

                
            })
            .catch(err => console.log(err.message))
    }
}
</script>