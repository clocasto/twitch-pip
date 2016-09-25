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
        '1': state['1'] === 'pip' ? 'base' : 'pip',
        '2': state['2'] === 'pip' ? 'base' : 'pip'
      }
    default:
      return state
  }
}
