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

        case 'SWITCH_CHAT':
            return {
                ...state,
                source: 'http://www.twitch.tv/' + action.name + '/chat'
            }
            
        default:
            return state
    }
}
