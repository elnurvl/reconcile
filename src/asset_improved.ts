export function isSumEqualsToZero(...args: number[]): boolean {
    let precision = 0

    args.forEach(a => {
        precision = Math.max(getPrecision(a), precision)
    })

    let scale = 10 ** precision

    let sum = 0

    args.forEach(a => {
        sum += Math.round(a * scale)
    })

    return sum === 0
}

function getPrecision(a: number): number {
    if (Number.isInteger(a)) {
        return 0
    }

    const [coefficient, exponent = "0"] = a.toString().split("e")
    const fraction = coefficient.split(".")[1] ?? ""

    return Math.max(0, fraction.length - Number(exponent))
}
