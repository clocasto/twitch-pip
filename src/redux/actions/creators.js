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
        status
    }

}

export function resizePip(event) {
    event.preventDefault();

    let size, xcoord, ycoord;

    if (event.buttons) {

        size = '100%';
        return {
            type: 'START_RESIZE_PIP',
            reference: { x: event.clientX, y: event.clientY },
            size,
            disabled: true
        }
    } else {
        console.log('END_RESIZE_PIP');
        size = '0%';
        return {
            type: 'END_RESIZE_PIP',
            end: {
                x: event.clientX,
                y: event.clientY
            },
            reference: { x: 0, y: 0 },
            size,
            disabled: false
        }
    }

}
