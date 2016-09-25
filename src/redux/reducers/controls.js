export const controls = function(state = {}, action) {

    switch (action.type) {
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
