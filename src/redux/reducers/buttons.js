const buttonReducer = function(state = [], action){
  switch(action.type){
    case 'MAKE_TALLER':
      return {
        ...state,
        height: state.height + action.px
      }
    case 'MAKE_WIDER':
      return {
        ...state,
        width: state.width + action.px
      }
    case 'TOGGLE_POSITIONS':
      return {
        ...state,
        one: state.one === 'thin' ? 'fat' : 'thin',
        two: state.two === 'thin' ? 'fat' : 'thin'
      }
    default:
      return state
  }
}

export default buttonReducer
