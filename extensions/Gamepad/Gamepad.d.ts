declare function activeGamepads() {
    return navigator.getGamepads().filter(pad => pad !== null)
}
declare function gamepadconnected(callback: (e: GamepadEvent) => void, { waitForTotal = 1 } = {}) {
    return new Promise((resolve, reject) => {
        var i = 0
        addEventListener("gamepadconnected", (...e) => {
            callback?.(...e);
            i++
            if (waitForTotal == i) resolve(...e)
        })
    })
}

interface dualSense {
    x: () => GamepadButton;
    circle: () => GamepadButton;
    square: () => GamepadButton;
    triangle: () => GamepadButton;
    l1: () => GamepadButton;
    r1: () => GamepadButton;
    l2: () => GamepadButton;
    r2: () => GamepadButton;
    share: () => GamepadButton;
    options: () => GamepadButton;
    l3: () => GamepadButton;
    r3: () => GamepadButton;
    up: () => GamepadButton;
    down: () => GamepadButton;
    left: () => GamepadButton;
    right: () => GamepadButton;
    ps: () => GamepadButton;
    touchpad: () => GamepadButton;
    lAxes: () => { x: number, y: number };
    rAxes: () => { x: number, y: number };
}

class dualSenseClass extends Gamepad {
    x: () => GamepadButton;
    circle: () => GamepadButton;
    square: () => GamepadButton;
    triangle: () => GamepadButton;
    l1: () => GamepadButton;
    r1: () => GamepadButton;
    l2: () => GamepadButton;
    r2: () => GamepadButton;
    share: () => GamepadButton;
    options: () => GamepadButton;
    l3: () => GamepadButton;
    r3: () => GamepadButton;
    up: () => GamepadButton;
    down: () => GamepadButton;
    left: () => GamepadButton;
    right: () => GamepadButton;
    ps: () => GamepadButton;
    touchpad: () => GamepadButton;
    lAxes: () => { x: number, y: number };
    rAxes: () => { x: number, y: number };
}

interface mapping {
    "dualSense": dualSense
}

interface mappingClass {
    "dualSense": dualSenseClass
}

declare function getGamepadById(id: number) {
    return navigator.getGamepads()[id]
}


declare class gamepad<K extends keyof mappingClass> {
    constructor(public type: K, public index: number) {
        this.type = Object.keys(mapping).find((key) => { return key == this.type }) as K
        if (!this.type) throw new Error(`Unknown gamepad type`)
        
        this = mappingClass[K]
        // Object.keys(mapping[type]).forEach((v, i) => {
        //     Object.defineProperty(this, v, {
        //         get: () => {
        //             return mapping[type][v](this.#gamepad)
        //         }
        //     });
        // })
        // for (const prop in this.#gamepad) {
        //     Object.defineProperty(this, prop, {
        //         get: () => {
        //             return this.#gamepad[prop]
        //         }
        //     });
        // }
    }
}
