const playerReducer = function(state = [], action) {
	if(action.type === 'TURN_ON'){
		console.log('fuck yes react redux')
	}
	return state;
}

const dragPipReducer = function(state = {}, action) {
	if(action.type === 'DRAG_PIP'){
		console.log('hell yeah')
	}
	return state;
}

export default playerReducer;