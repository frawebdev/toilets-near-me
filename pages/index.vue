<template>
<main class="h-screen flex flex-column justify-center items-center">
  <div>
    <div class="text-center">
    <Title :titleText="'Welcome!'" class="mb-8"/>
    <div v-if="lat && lng">
    <Button :btnText="'Find a toilet near me'" @handleClick="sendCoord"/>
    </div>
    <div v-else>
      <font-awesome-icon icon="spinner" class="animate-spin"/>
    </div>
    </div>
  </div>
</main>
</template>

<script>
export default {

  data(){
    return {
      lat: null,
      long: null
    }
  },
  async mounted() {
    await this.$store.dispatch('getCurrentPosition')

    this.lat = this.$store.state.lat
    this.lng = this.$store.state.lng

  },
  methods: {
    async sendCoord() {
      if(this.lat && this.lng) {
        await this.$store.dispatch('getToilets', [this.lat, this.lng])
        this.$router.push('/toiletlist')
      } else {
        console.log(this.lat + ' ' + this.lng)
      }
    }
  }

}
</script>
