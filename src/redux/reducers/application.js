export const application = function(state = [], action) {

    switch (action.type) {

        case 'TOGGLE_POSITIONS':

            let newState = state.slice();
            let oldBase = state.find(player => player.size === 'base');
            let oldIdx = state.indexOf(oldBase);
            console.log(oldBase);

            newState[action.base] = {
                ...state[action.base],
                size: 'base'
            }
            newState[oldIdx] = {
                ...state[oldIdx],
                size: 'pip'
            }

            return newState;


        case 'ADD_PLAYER':

            return [
                ...state, {
                    ...action.player,
                    id: state.length.toString(),
                    size: state.length > 0 ? 'pip' : 'base'
                }
            ];

        case 'CLOSE_PLAYER':

            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];

        default:

            return state;
    }
}
