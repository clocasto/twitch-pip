export function swapPositions() {
    let node = document.getElementsByClassName('pip')[0];
    node.style.setProperty('transform', 'none');
    return {
        type: 'TOGGLE_POSITIONS'
    }
}

export function dragCreator(event) {

    let size = event.type === 'mousedown' ? '100%' : '0%';
    // let shield = document.getElementById('shield');
    // shield.style.setProperty('height', size);
    // shield.style.setProperty('width', size);

    return {
        type: 'DRAG_PIP',
        size
    }

}


export function resize(event) {

    return {
        type: 'RESIZE_PIP'
    }
}
