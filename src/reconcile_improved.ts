export function isSumEqualsToZero(...args: (number | bigint)[]): boolean {
    let precision = 0

    precision = Math.max(0, ...args.map(a => typeof a === 'bigint' ? 0 : getPrecision(a)))

    let scale = 10n ** BigInt(precision)

    let sum = 0n

    args.forEach(a => {
        if (typeof a === 'bigint') {
            sum += a * scale
        } else {
            sum += BigInt(Math.round(a * Number(scale)))
        }
    })

    return sum === 0n
}

function getPrecision(a: number): number {
    if (Number.isInteger(a)) {
        return 0
    }

    const [coefficient, exponent = "0"] = a.toString().split("e")
    const fraction = coefficient.split(".")[1] ?? ""

    return Math.max(0, fraction.length - Number(exponent))
}
