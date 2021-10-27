<template>
<div>
    <div v-if="toilets">
    <ul v-for="toilet in toilets" :key="toilet.place_id">
        <ListElement :toiletData="toilet"/>
    </ul>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            toilets: null
        }
    },
    async mounted () {
        this.toilets = await this.$store.state.toilets
        console.log(this.toilets)
    }
}
</script>