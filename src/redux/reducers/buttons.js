const buttonReducer = function(state = [], action){
  switch(action.type){
    case 'MAKE_TALLER':
      return {
        ...state,
        height: state.height + action.px
      }
    case 'MAKE_WIDER':
      console.log('wider')
      return {
        ...state,
        width: state.width + action.px
      }
    case 'SET_POSITION':
      console.log('settingstate: ', state)
      return {
        ...state,
        pos: {x:200, y:200}
      }
    case 'RESET_POSITION':
      console.log('resettingstate: ',state)
      return {
        ...state,
        pos: {x:0, y:0}
      }
    case 'TOGGLE_POSITIONS':
      console.log(state)
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
