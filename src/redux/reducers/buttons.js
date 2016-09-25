export const button = function(state = [], action){
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
        one: state.one === 'pip' ? 'base' : 'pip',
        two: state.two === 'pip' ? 'base' : 'pip'
      }
    default:
      return state
  }
}
