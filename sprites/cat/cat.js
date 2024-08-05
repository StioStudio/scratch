const me = getMeById("cat")
// console.log(me)

whenKeyPressed("Space", async () => {
    forever(() => {
        // console.log(mouseX, mouseY)
    })
    broadcast("cat")
})

broadcast