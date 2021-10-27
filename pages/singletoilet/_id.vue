<template>
    <main>
        <div id="map" class="h-80 w-full">

        </div>
        <Reviews :reviews="reviews"/>
    </main>
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
            reviews: null
        }
    },
    async mounted() {
        await this.$store.dispatch('getSingleToilet', this.$route.params.id)

        console.log(this.$store.state.singleToilet)

        this.lat = await this.$store.state.singleToilet.geometry.location.lat
        this.lng = await this.$store.state.singleToilet.geometry.location.lng
        this.reviews = await this.$store.state.singleToilet.reviews

        this.currentLat = await this.$store.state.lat
        this.currentLng = await this.$store.state.lng

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
                    console.log(res)
                    console.log(status)
                    if(status == 'OK') {
                        directionsRender.setDirections(res)
                    }
                })

                
            })
            .catch(err => console.log(err.message))
    }
}
</script>