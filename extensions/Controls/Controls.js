export function wait(me, seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

export function waitFrames(me, _frames) {
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

export async function repeat(me, times, callback) {
    for (let i = 0; i < times; i++) {
        await callback(i)
    }
}

export async function forever(me, callback, { _waitFrames = true, _condition = () => true } = {}) {
    var i = 0
    while (_condition(i)) {
        await callback(i)
        await waitFrames(_waitFrames)
        i++
    }
}

export function waitUntil(me, condition) {

}

export async function repeatUntil(me, condition, callback) {
    var i = 0
    while (condition(i)) {
        await callback(i)
        i++
    }
}

export function when(me, condition, callback, { once = false } = {}) {
    const index = me.variableCallbacksSet.length
    me.variableCallbacksSet.push(()=>{
        if(condition()) {
            callback()
            if(once) me.variableCallbacksSet.splice(index, 1)
        }
    })
}