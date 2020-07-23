import axios from 'axios'

export default {

    async getGeneric(type, page, filter) {
        let data = {
            genre: filter.genre,
            year: filter.year
        }
        return await axios.get(`${process.env.VUE_APP_SERVER}${type}/search/${page}`, { params: data })
    },

    async getDetailsGeneric(type, id) {
        return await axios.get(`${process.env.VUE_APP_SERVER}${type}/${id}`)

    },

    async getGenre(type) {
        return await axios.get(`${process.env.VUE_APP_GENRES}${type}`)
    }


}