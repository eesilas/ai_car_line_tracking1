huskylens.initI2c()
let x1 = 0
let x2 = 0
let detmine = 0
basic.forever(function () {
    huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
    while (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
        x2 = huskylens.readeArrow(1, Content2.xTarget)
        x1 += huskylens.readeArrow(1, Content2.xOrigin)
        detmine += x2 - x1
        if (-50 < detmine) {
            basic.showIcon(IconNames.Giraffe)
        } else {
            basic.showIcon(IconNames.Scissors)
        }
    }
})
