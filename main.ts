let roll = 0
let pitch = 0
basic.forever(function () {
    roll = input.rotation(Rotation.Roll)
    pitch = input.rotation(Rotation.Pitch)
    basic.clearScreen()
    led.plotBarGraph(
    roll,
    90
    )
})
