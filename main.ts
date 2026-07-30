class Asset {
    private constructor(
        private readonly value: bigint,
        private readonly multiplier: bigint,
    ) {}

    plus(other: Asset): Asset {
        if (this.multiplier === other.multiplier) {
            return new Asset(this.value + other.value, this.multiplier)
        }

        const multiplier =
            this.multiplier > other.multiplier
                ? this.multiplier
                : other.multiplier

        return new Asset(
            this.value * (multiplier / this.multiplier) +
            other.value * (multiplier / other.multiplier),
            multiplier,
        )
    }

    isZero(): boolean {
        return this.value === 0n
    }

    static make(input: string): Asset {
        const [integer, fraction = ""] = input.split(".")
        const multiplier = 10n ** BigInt(fraction.length)
        const value = BigInt(integer + fraction)

        return new Asset(value, multiplier)
    }
}

function isSumEqualToZero(a: Asset, b: Asset, c: Asset): boolean {
    return a.plus(b).plus(c).isZero()
}

function validateInput(val: unknown) {
    if (Number.isNaN(val)) {
        console.log("You must provide 3 numbers separated by spaces.")
    }
}

const [a, b, c] = process.argv.slice(2).map((arg) => {
    if (Number.isNaN(Number(arg))) {
        console.log("You must provide a number.")
        process.exit(1)
    }
    return Asset.make(arg)
})

if (a === undefined || b === undefined || c === undefined) {
    console.log("You must provide 3 numbers separated by a space.")
    process.exit(1)
}

console.log(isSumEqualToZero(a, b, c))