export function swapPositions() {
    let node = document.getElementsByClassName('pip')[0];
    node.style.setProperty('transform', 'none');
    return {
        type: 'TOGGLE_POSITIONS'
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

export function addPip() {

    return {
        type: 'ADD_PIP'
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
