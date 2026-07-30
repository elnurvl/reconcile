import { describe, it, expect } from "vitest"
import { isSumEqualToZero, Asset } from './asset'

describe("function", () => {
    it("gives false if sum of numbers is not zero", () => {
        expect(isSumEqualToZero(Asset.make("3"), Asset.make("-1"), Asset.make("-1"))).toBe(false)
    })

    it("gives true if sum of integers is zero", () => {
        expect(isSumEqualToZero(Asset.make("3"), Asset.make("-2"), Asset.make("-1"))).toBe(true)
    })

    it("gives true if sum of decimals is zero", () => {
        expect(isSumEqualToZero(Asset.make("0.000003"), Asset.make("-0.000002"), Asset.make("-0.000001"))).toBe(true)
    })

    it("gives true if sum of high-precision decimals is zero", () => {
        expect(isSumEqualToZero(Asset.make("0.0000000003"), Asset.make("-0.0000000002"), Asset.make("-0.0000000001"))).toBe(true)
    })

    it("gives true if sum of varied-precision decimals is zero", () => {
        expect(isSumEqualToZero(Asset.make("1.0000000003"), Asset.make("-0.0000000003"), Asset.make("-1"))).toBe(true)
    })
})
