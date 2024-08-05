export function pickRandom(from, to) {
    const max = Math.max(from, to)
    const min = Math.min(from, to)
    return Math.random() * (max - min) + min
}

export function join(a, b) {
    return String(a) + String(b)
}

export function letterOf(index, value) {
    return value[index]
}

export function lengthOf(value) {
    return value.length
}

export function thingContains(thing, contains) {
    return thing.includes(contains)
}

export function mod(a, b) {
    return a % b
}

export function round(value) {
    return Math.round(value)
}

export function abs(value) {
    return Math.abs(value)
} 

export function floor(value) {
    return Math.floor(value)
}

export function ceiling(value) {
    return Math.ceil(value)
}

export function sqrt(value) {
    return Math.sqrt(value)
}

export function sin(value) {
    return Math.sin(value * Math.PI / 180)
}

export function cos(value) {
    return Math.cos(value * Math.PI / 180)
}

export function tan(value) {
    return Math.tan(value * Math.PI / 180)
}

export function asin(value) {
    return Math.asin(value) * 180 / Math.PI
}

export function acos(value) {
    return Math.acos(value) * 180 / Math.PI
}

export function atan(value) {
    return Math.atan(value) * 180 / Math.PI
}

export function ln(value) {
    return Math.log(value)
}

export function log(value) {
    return Math.log10(value)
}