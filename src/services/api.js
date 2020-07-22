import axios from 'axios'

export default {

    async getGeneric(type, page) {
        return await axios.get(`${process.env.VUE_APP_SERVER}/${type}/search/${page}`)
    },

    async getDetailsGeneric(type, id) {
        return await axios.get(`${process.env.VUE_APP_SERVER}/${type}/${id}`)

    }


}