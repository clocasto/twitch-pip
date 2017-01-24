export const pip = function(state = {}, action) {

    switch (action.type) {
        case 'ENABLE_RESIZE':
            return {
                ...state,
                resize: true,
                reference: action.reference
            }

        case 'DRAG_PIP':
            return {
                ...state,
                shield: {
                    height: action.size,
                    width: action.size
                }
            }
        case 'RESIZE_PIP':

            return {
                ...state,
                shield: {
                    height: action.size,
                    width: action.size
                },
                style: {
                    ...state.style,
                    size: {
                        width: state.style.size.width + (action.end.x - state.reference.x),
                        height: state.style.size.height + (action.end.y - state.reference.y)
                    }
                },
                reference: action.reference,
                disabled: true
            }

        case 'END_RESIZE_PIP':

            return {
                ...state,
                shield: {
                    height: action.size,
                    width: action.size
                },
                style: {
                    ...state.style,
                    size: {
                        width: state.style.size.width + (action.end.x - state.reference.x),
                        height: state.style.size.height + (action.end.y - state.reference.y)
                    }
                },
                disabled: false,
                resize: false
            }
        default:

            return state;
    }

}
