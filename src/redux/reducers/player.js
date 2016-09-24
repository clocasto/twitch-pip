const playerReducer = function(state = [], action) {
	if(action.type === 'TURN_ON'){
		console.log('fuck yes react redux')
	}
	return state;
}

export default playerReducer;