const getAllAviaries = (state) => {
	return state.aviaries.filter((aviary)=> {
		return aviary.deleted == false
	})
}

const getAviaryById = (state) => {
	return function(id) {
		return state.aviaries.filter((aviary)=> {
			return aviary.id == id && aviary.deleted == false
		})
	}
}

const getSectorsAviary = (state) => {
	return function(id) {
		let aviary = state.aviaries.filter((aviary)=> {
			return aviary.id == id
		})
		return aviary[0]['sectors']
	}
}

const getBatchByAviary = (state) => {
	return function(id) {
		let aviary = state.aviaries.filter((aviary)=> {
			return aviary['id'] == id
		})
		return aviary[0]['info_last_batch']
	}
}

export{
	getAllAviaries,
	getAviaryById,
	getSectorsAviary,
	getBatchByAviary
}