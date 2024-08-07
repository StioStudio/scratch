export function variable(me, name) {
    const hashTagName = `__${name}`
    if (!me.variableCallbacksSet) {
        me.variableCallbacksSet = []
    }
    Object.defineProperty(me, name, {
        get: () => {
            return getVariable(me, hashTagName)
        },
        set: (value) => {
            setVariable(me, hashTagName, value)
        }
    })
}

export function getVariable(me, name) {
    return me[name]
}

export function setVariable(me, name, value) {
    me[name] = value
    me.variableCallbacksSet.forEach((callback) => {
        callback(me, name, value)
    })
    if (me !== window) {
        window.variableCallbacksSet.forEach((callback) => {
            callback(window, name, value)
        })
    }
}