export const chat = function(state = {}, action) {

    switch (action.type) {

        case 'RESIZE_CHAT':

            return {
                ...state,
                size: {
                    width: action.size.width,
                    height: action.size.height
                }
            }
            
        default:
            return state
    }
}
