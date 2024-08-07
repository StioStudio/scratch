export function askAndWait(me, question) { }
export let answer = ""

const __keyPressedArray__ = {}
addEventListener("keydown", (event) => {
    __keyPressedArray__[event.key] = Date.now()
    __keyPressedArray__[event.code] = Date.now()
})
addEventListener("keyup", (event) => {
    delete __keyPressedArray__[event.key]
    delete __keyPressedArray__[event.code]
})
addEventListener("keypress", (event) => {
    __keyPressedArray__[event.key] = Date.now()
    __keyPressedArray__[event.code] = Date.now()
})
function __update__() {
    Object.keys(__keyPressedArray__).forEach(key => {
        if (1000 < Date.now() - __keyPressedArray__[key]) delete __keyPressedArray__[key]
    })
    requestAnimationFrame(__update__)
}
__update__()

export function keyPressed(me, key) {
    return Object.keys(__keyPressedArray__).includes(key)
}

export var mouseDown = false
addEventListener("pointerdown", ()=>{mouseDown = true})
addEventListener("pointerup", ()=>{mouseDown = false})

export var mouseX
export var mouseY
addEventListener("pointermove", (event)=>{
    mouseX = event.clientX
    mouseY = event.clientY
})

var __startTimer__ = Date.now()
export function timer() {
    return Date.now() - __startTimer__
}

export function resetTimer() {
    __startTimer__ = Date.now()
}

export function currentYear() {
    return new Date().getFullYear()
}

export function currentMonth() {
    return new Date().getMonth()
}

export function currentDate() {
    return new Date().getDate()
}

export function currentDayOfWeek() {
    return new Date().getDay()
}

export function currentHour() {
    return new Date().getHours()
}

export function currentMinute() {
    return new Date().getMinutes()
}

export function currentSecond() {
    return new Date().getSeconds()
}

export function daysSince2000() {
    return (Date.now() - 946684800000) / 86400000
}