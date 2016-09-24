export function func1(index){
	return {
		type: 'TURN_ON',
		index
	}
}

export function func2(whoa){
	return {
		type: 'TURN_OFF',
		whoa
	}
}