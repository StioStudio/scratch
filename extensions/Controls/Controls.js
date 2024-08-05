export function wait(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

export function waitFrames(_frames) {
    return new Promise((resolve, reject) => {
        var i = 1
        function update() {
            if (_frames < i) {
                resolve()
                return
            }
            i++
            requestAnimationFrame(update)
        }
        update()
    })
}

export async function repeat(times, callback) {
    for (let i = 0; i < times; i++) {
        await callback(i)
    }
}

export async function forever(callback, { _waitFrames = true, _condition = () => true } = {}) {
    var i = 0
    while (_condition(i)) {
        await callback(i)
        await waitFrames(_waitFrames)
        i++
    }
}

export function waitUntil(condition) {

}

export async function repeatUntil(condition, callback) {
    var i = 0
    while (condition(i)) {
        await callback(i)
        i++
    }
}