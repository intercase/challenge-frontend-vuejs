import Vue from 'vue'

const updateAllAviaries = (state, dataIn) => {
	state.aviaries = dataIn
}

const editAviary = (state, dataIn) => {
	let index = state.aviaries.map(function(e) { return e.id }).indexOf(dataIn['aviary_id'])
	Vue.set(state.aviaries, index, dataIn)
}

const createAviary = (state, dataIn) => {
	state.aviaries.push(dataIn)
}

const createSector = (state, dataIn) => {
	let index = state.aviaries.findIndex((obj => obj.id == dataIn['aviary_id']))
	let obj = state.aviaries[index]
	obj['sectors'].push({ 'sector_id': dataIn['sector_id'], 'sector_name': dataIn['sector_name'] })
	Vue.set(state.aviaries, index, obj)
}

const createBatch = (state, dataIn) => {
	let index = state.aviaries.findIndex((obj => obj.id == dataIn['aviary_id']))
	let obj = state.aviaries[index]
	obj['info_last_batch'] = dataIn
	obj['info_last_batch']['timestamp_start'] = obj['info_last_batch']['timestamp']
	obj['info_last_batch']['batch_id'] = obj['info_last_batch']['id']
	Vue.set(state.aviaries, index, obj)
}

const finishBatch = (state, dataIn) => {
	let index = state.aviaries.findIndex((obj => obj.id == dataIn['aviary_id']))
	let obj = state.aviaries[index]
	obj['info_last_batch'] = {
		'last_number_sequence': state.aviaries[index]['info_last_batch']['last_number_sequence'],
		'batch_id': '-'
	}
	Vue.set(state.aviaries, index, obj)
}

const deleteAviary = (state, dataIn) => {
	let index = state.aviaries.map(function(e) { return e.id }).indexOf(dataIn['id'])
	let obj = state.aviaries[index]
	obj['deleted'] = true
	Vue.set(state.aviaries, index, obj)
}

export {
	updateAllAviaries,
	editAviary,
	createAviary,
	createSector,
	createBatch,
	finishBatch,
	deleteAviary
}