await downloadExtension("Gamepad")

await gamepadconnected()

forever(()=>{
    console.log(navigator.getGamepads()[0].buttons[0].value)
}, {_waitFrames: 10})