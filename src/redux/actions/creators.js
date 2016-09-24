export function swapPositions(){
	return {
		type: 'TOGGLE_POSITIONS'
	}
}

export function setPosition(){
	return {
		type: 'SET_POSITION'
	}
}

export function resetPosition(){
	return {
		type: 'RESET_POSITION'
	}
}

export function makeTaller(px){
	return {
		type: 'MAKE_TALLER',
		px
	}
}

export function makeWider(px){
	return {
		type: "MAKE_WIDER",
		px
	}
}

export function toggleColor(){
	return {
		type: "TOGGLE_COLOR"
	}
}
