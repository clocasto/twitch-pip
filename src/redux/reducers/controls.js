export const controls = function(state = {}, action) {

    switch (action.type) {

        case 'DRAG_PIP':
            return {
                ...state,
                baseZ: action.baseZ
            }

        case 'ENABLE_RESIZE':
            return {
                ...state,
                baseZ: action.baseZ
            }

        case 'END_RESIZE_PIP':
            return {
                ...state,
                baseZ: action.baseZ
            }

        default:
            return state
    }
}
