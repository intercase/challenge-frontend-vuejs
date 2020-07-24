import Vue from 'vue'

const getMoviesByPage = ({ commit }, page) => {
	return new Promise((resolve, reject) => {
		Vue.http.get(`${process.env.VUE_APP_BASEURL}/movie/search/${page}`).then(res => {
			resolve(res.data)
		}).catch( function(err) {
			reject(res.data)
		})
	})
}

const getMovieById = ({ commit }, id) => {
	return new Promise((resolve, reject) => {
		Vue.http.get(`${process.env.VUE_APP_BASEURL}/movie/${id}`).then(res => {
			resolve(res.data)
		}).catch( function(err) {
			reject(res.data)
		})
	})
}


export {
	getMoviesByPage,
	getMovieById
}