export const application = function(state = [], action) {

    switch (action.type) {

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
