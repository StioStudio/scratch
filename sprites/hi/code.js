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

repeat(12, () => {
    a++
})

// Object.defineProperty(window, "hello", {
//     get: () => {
//         console.log("wow")
//         return "hello"
//     }
// })

// console.log(hello)