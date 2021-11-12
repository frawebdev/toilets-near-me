<template>
<div>
    <div class="m-8 p-4 border-4 rounded border-red-400 shadow">
    <li class="mx-2 my-6 p-4 flex flex-row items-center justify-center shadow bg-red-400 text-white">
        <font-awesome-icon icon="redo" @click="refresh"/>
    </li>
    <div v-if="toilets">
    <ul v-for="toilet in toilets" :key="toilet.place_id">
        <ListElement :toiletData="toilet"/>
    </ul>
    </div>
    <div v-else>
        <font-awesome-icon icon="spinner" class="animate-spin"/>
    </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            // toilets: null
        }
    },
    methods: {
        async refresh() {
            await this.$store.dispatch('getCurrentPosition')

            let lat = await this.$store.state.lat
            let lng = await this.$store.state.lng

            this.$store.dispatch('getToilets', [lat, lng])
        }
    },
    computed: {
        toilets () {
            return this.$store.state.toilets
        }
    }
}
</script>