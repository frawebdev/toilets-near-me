<template>
<div>
    <div v-if="toilets" class="m-8 p-4 border-4 rounded border-red-400 shadow">
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