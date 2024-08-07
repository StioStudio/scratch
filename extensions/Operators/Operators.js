export function pickRandom(me, from, to) {
    const max = Math.max(from, to)
    const min = Math.min(from, to)
    return Math.random() * (max - min) + min
}

export function join(me, a, b) {
    return String(a) + String(b)
}

export function letterOf(me, index, value) {
    return value[index]
}

export function lengthOf(me, value) {
    return value.length
}

export function thingContains(me, thing, contains) {
    return thing.includes(contains)
}

export function mod(me, a, b) {
    return a % b
}

export function round(me, value) {
    return Math.round(value)
}

export function abs(me, value) {
    return Math.abs(value)
} 

export function floor(me, value) {
    return Math.floor(value)
}

export function ceiling(me, value) {
    return Math.ceil(value)
}

export function sqrt(me, value) {
    return Math.sqrt(value)
}

export function sin(me, value) {
    return Math.sin(value * Math.PI / 180)
}

export function cos(me, value) {
    return Math.cos(value * Math.PI / 180)
}

export function tan(me, value) {
    return Math.tan(value * Math.PI / 180)
}

export function asin(me, value) {
    return Math.asin(value) * 180 / Math.PI
}

export function acos(me, value) {
    return Math.acos(value) * 180 / Math.PI
}

export function atan(me, value) {
    return Math.atan(value) * 180 / Math.PI
}

export function ln(me, value) {
    return Math.log(value)
}

export function log(me, value) {
    return Math.log10(value)
}