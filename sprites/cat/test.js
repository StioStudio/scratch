const me = getMeById("cat")
// console.log(me)

whenGreenFlagClicked(() => {
    console.log("Green Flag Clicked")
})

whenIReceiveMessage("cat", () => {
    console.log("I received cat")
})
