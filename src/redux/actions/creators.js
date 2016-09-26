export function swapPositions(id) {
    document.getElementById(id).style.setProperty('transform', 'none');

    return {
        type: 'TOGGLE_POSITIONS',
        base: id
    }
}

export function dragPip(event) {

    let size = event.type === 'mouseup' ? '0%' : '100%';
    let baseZ = event.type === 'mouseup' ? 1 : -5;

    return {
        type: 'DRAG_PIP',
        size,
        baseZ
    }

}

export function toggleResize(event) {

    let status = event.type === 'mouseup' ? false : true;

    return {
        type: 'ENABLE_RESIZE',
        reference: { x: event.pageX, y: event.pageY },
        status,
        baseZ: -5
    }

}

export function resizePip(event) {

    let size, xcoord, ycoord;

    if (event.buttons) {

        size = '100%';
        return {
            type: 'RESIZE_PIP',
            end: {
                x: event.clientX,
                y: event.clientY
            },
            reference: { x: event.clientX, y: event.clientY },
            size,
            disabled: true
        }
    } else {

        size = '0%';
        return {
            type: 'END_RESIZE_PIP',
            end: {
                x: event.clientX,
                y: event.clientY
            },
            size,
            disabled: false,
            baseZ: 1
        }
    }

}

export function resizeChat(height, width) {

    return {
        type: 'RESIZE_CHAT',
        size: {
            height,
            width
        }
    }
}

export function switchChannel(name) {

    return {
        type: 'SWITCH_CHAT',
        name
    }
}

export function addPlayer(name) {

    return {
        type: 'ADD_PLAYER',
        player: {
            name,
            source: 'http://www.twitch.tv/' + name + '/chat'
        }
    }
}

export function closePlayer(id) {

    return {
        type: 'CLOSE_PLAYER',
        id
    }
}
