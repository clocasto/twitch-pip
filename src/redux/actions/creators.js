export function swapPositions() {
    let node = document.getElementsByClassName('pip')[0];
    node.style.setProperty('transform', 'none');
    return {
        type: 'TOGGLE_POSITIONS'
    }
}

export function dragPip(event) {

    let size = event.type === 'mouseup' ? '0%' : '100%';

    return {
        type: 'DRAG_PIP',
        size
    }

}

export function toggleResize(event) {

    let status = event.type === 'mouseup' ? false : true;

    return {
        type: 'ENABLE_RESIZE',
        reference: { x: event.pageX, y: event.pageY },
        status
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
            disabled: false
        }
    }

}
