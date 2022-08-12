let roll = 0
basic.forever(function () {
    roll = input.rotation(Rotation.Roll)
    basic.clearScreen()
    led.plotBarGraph(
    roll,
    90
    )
})
