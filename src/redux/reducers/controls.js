export const controls = function(state = [], action){
  console.log('ADD_PIP -> STATE:', state);
  switch(action.type){
    case 'ADD_PIP':
      return {
        ...state
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
