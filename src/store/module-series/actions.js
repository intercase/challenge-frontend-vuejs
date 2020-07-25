import Vue from 'vue'

const getSeriesByPage = ({ commit }, page) => {
	return new Promise((resolve, reject) => {
		Vue.http.get(`${process.env.VUE_APP_BASEURL}/tv/search/${page}`).then(res => {
			resolve(res.data)
		}).catch( function(err) {
			reject(res.data)
		})
	})
}

const getSerieById = ({ commit }, id) => {
	return new Promise((resolve, reject) => {
		Vue.http.get(`${process.env.VUE_APP_BASEURL}/tv/${id}`).then(res => {
			resolve(res.data)
		}).catch( function(err) {
			reject(res.data)
		})
	})
}


export {
	getSeriesByPage,
	getSerieById
}