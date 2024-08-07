// let me = getMeById("hi")
// me.addExtension(await me.downloadExtension("Controls"))

// console.log(me)
variable("a")
variable("b")

a = 0
b = 10

when(() => a > b, () => {
    console.log("a > b")
}, { once: true })

forever
forever(async () => {
    a++
    console.log(a)
    await wait(0.5)
})

// Object.defineProperty(window, "hello", {
//     get: () => {
//         console.log("wow")
//         return "hello"
//     }
// })

// console.log(hello)