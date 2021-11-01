import axios from 'axios'
import { Geolocation } from '@capacitor/geolocation'

console.log(process.env.mapsApiKey)

const baseUrl = 'https://toilet-proxy.herokuapp.com/https://maps.googleapis.com/maps/api'

export const state = () => ({
    toilets: null,
    singleToilet: null,
    lat: null,
    lng: null
})

export const mutations = {
    getToilets(state, data) {
        state.toilets = data
    },
    getSingleToilet(state, data) {
        state.singleToilet = data
    },
    getCurrentPosition(state, data) {
        state.lat = data.latitude
        state.lng = data.longitude
    }
}

export const actions = {
    async getToilets({ commit }, [lat, long]) {
        await axios.get( baseUrl + '/place/nearbysearch/json?location=' + lat + '%2C' + long + '&radius=1500&type=point_of_interest&keyword=toilet&key=' + process.env.mapsApiKey)
        .then(res => {
            commit('getToilets', res.data.results)
        })
    },
    async getSingleToilet({ commit }, place_id) {
        await axios.get( baseUrl + '/place/details/json?place_id='  + place_id +  '&key=' + process.env.mapsApiKey)
        .then(res => {
            commit('getSingleToilet', res.data.result)
        })
    },
    async getCurrentPosition({ commit }) {
        let coords = await Geolocation.getCurrentPosition()
        commit('getCurrentPosition', coords.coords)
    }
}