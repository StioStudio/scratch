export function activeGamepads() {
    return navigator.getGamepads().filter(pad => pad !== null)
}
export function gamepadconnected(me, callback, { waitForTotal = 1 } = {}) {
    return new Promise((resolve, reject) => {
        var i = 0
        addEventListener("gamepadconnected", (...e) => {
            callback?.(...e);
            i++
            if (waitForTotal == i) resolve(...e)
        })
    })
}

const mapping = {
    dualSense: {
        x: (gamepad) => { return gamepad.buttons[0] },
        circle: (gamepad) => { return gamepad.buttons[1] },
        square: (gamepad) => { return gamepad.buttons[2] },
        triangle: (gamepad) => { return gamepad.buttons[3] },
        l1: (gamepad) => { return gamepad.buttons[4] },
        r1: (gamepad) => { return gamepad.buttons[5] },
        l2: (gamepad) => { return gamepad.buttons[6] },
        r2: (gamepad) => { return gamepad.buttons[7] },
        share: (gamepad) => { return gamepad.buttons[8] },
        options: (gamepad) => { return gamepad.buttons[9] },
        l3: (gamepad) => { return gamepad.buttons[10] },
        r3: (gamepad) => { return gamepad.buttons[11] },
        up: (gamepad) => { return gamepad.buttons[12] },
        down: (gamepad) => { return gamepad.buttons[13] },
        left: (gamepad) => { return gamepad.buttons[14] },
        right: (gamepad) => { return gamepad.buttons[15] },
        ps: (gamepad) => { return gamepad.buttons[16] },
        touchpad: (gamepad) => { return gamepad.buttons[17] },
        lAxes: (gamepad) => { return { x: gamepad.axes[0], y: gamepad.axes[1] } },
        rAxes: (gamepad) => { return { x: gamepad.axes[2], y: gamepad.axes[3] } },
    }
}

export function getGamepadById(me, id) {
    return navigator.getGamepads()[id]
}

export class gamepad {
    #index = 0
    get #gamepad() {
        return getGamepadById(this.#index)
    }
    constructor(me, type, index) {
        this.#index = index
        type = Object.keys(mapping).find((key) => { return key == type })
        // console.log(type, index, getGamepadById(index), mapping[type])

        Object.keys(mapping[type]).forEach((v, i) => {
            Object.defineProperty(this, v, {
                get: () => {
                    return mapping[type][v](this.#gamepad)
                }
            });
        })
        for (const prop in this.#gamepad) {
            Object.defineProperty(this, prop, {
                get: () => {
                    return this.#gamepad[prop]
                }
            });
        }
    }
}

