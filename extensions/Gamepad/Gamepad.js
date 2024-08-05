export function activeGamepads() {
    return navigator.getGamepads().filter(pad => pad !== null)
}
export function gamepadconnected(callback) {
    return new Promise((resolve, reject) => {
        addEventListener("gamepadconnected", (...e) => { callback?.(...e); resolve(...e) })
    })
}

// Mapping of buttons
export function mapButtons(buttons) {

    return buttons
}