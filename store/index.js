import axios from 'axios'
import { Geolocation } from '@capacitor/geolocation'

const baseUrl = 'https://toilet-proxy.herokuapp.com/https://maps.googleapis.com/maps/api'

export const state = () => ({
    toilets: null,
    singleToilet: null,
    lat: null,
    lng: null,
    photo: null
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
    },
    getPlacePhoto(state, data) {
        state.photo = data
    }
}

export const actions = {
    async getToilets({ commit }, [lat, long]) {
        await axios.get( baseUrl + '/place/nearbysearch/json?location=' + lat + '%2C' + long + '&radius=1000&type=point_of_interest&keyword=toilet&key=' + process.env.mapsApiKey)
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
    },
    async getPlacePhoto({ commit }, photo_ref) {
        await axios.get( baseUrl + '/place/photo?maxwidth=400&photo_reference=' + photo_ref + '&key=' + process.env.mapsApiKey )
        .then(res => {
            commit('getPlacePhoto', res)
        })
    }
}