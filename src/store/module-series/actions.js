import Vue from 'vue'

const getMoviesByPage = ({ commit }, id) => {
	return new Promise((resolve, reject) => {
		Vue.http.get(`${process.env.VUE_APP_BASEURL}/movie/${id}`,).then(res => {
			console.log(res)
			commit('updateAllAviaries', res.body)
		}).catch( function(err) {
			alert('fail')
			return console.log(err)
		})
	})
}


export {
	getMoviesByPage
}