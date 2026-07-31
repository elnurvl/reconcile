export class Asset {
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

export function isSumEqualToZeroLegacy(a: Asset, b: Asset, c: Asset): boolean {
    return a.plus(b).plus(c).isZero()
}