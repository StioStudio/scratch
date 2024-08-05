export function whenGreenFlagClicked(callback) {
    greenFlag.addEventListener('click', callback)
}

export function whenKeyPressed(key, callback) {
    document.addEventListener("keypress", (event) => {
        if (event.key == key || event.code == key) {
            callback()
        }
    })
}

export function whenIReceiveMessage(message, callback) {
    document.addEventListener(`custom:${message}`, callback)
}

export function broadcast(message) {
    const event = new CustomEvent(`custom:${message}`)
    document.dispatchEvent(event)
}