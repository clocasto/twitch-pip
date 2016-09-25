export function swapPositions(){
	let node = document.getElementsByClassName('pip')[0];
		node.position
		node.style.setProperty('transform', 'none');
	return {
		type: 'TOGGLE_POSITIONS'
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
