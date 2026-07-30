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
    return a.toString().split(".")[1].length
}
