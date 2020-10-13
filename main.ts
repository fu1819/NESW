let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (true) {
        basic.showString("N")
    }
    if (degrees == 0 || degrees < 90) {
        basic.showString("N")
    }
    if (degrees == 90) {
        basic.showString("E")
    }
    if (degrees == 180) {
        basic.showString("S")
    }
    if (degrees == 270) {
        basic.showString("W")
    }
})
