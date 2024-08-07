export function whenGreenFlagClicked(me, callback, { once = false } = {}) {
    greenFlag.addEventListener('click', callback, { once })
}

export function whenKeyPressed(me, key, callback) {
    document.addEventListener("keypress", (event) => {
        if (event.key == key || event.code == key) {
            callback()
        }
    })
}

export function whenIReceiveMessage(me, message, callback) {
    document.addEventListener(`custom:${message}`, callback)
}

export function broadcast(me, message) {
    const event = new CustomEvent(`custom:${message}`)
    document.dispatchEvent(event)
}