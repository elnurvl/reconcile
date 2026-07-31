import { describe, it, expect } from "vitest"
import { isSumEqualsToZero, Asset } from './reconcile_improved'

describe("function", () => {
    it("gives false if sum of numbers is not zero", () => {
        expect(isSumEqualsToZero(3, -1, -1)).toBe(false)
    })

    it("gives true if sum of integers is zero", () => {
        expect(isSumEqualsToZero(3, -2, -1)).toBe(true)
    })

    it("gives true if sum of decimals is zero", () => {
        expect(isSumEqualsToZero(0.000003, -0.000002, -0.000001)).toBe(true)
    })

    it("gives true if sum of high-precision decimals is zero", () => {
        expect(isSumEqualsToZero(0.0000000003, -0.0000000002, -0.0000000001)).toBe(true)
    })

    it("gives true if sum of varied-precision decimals is zero", () => {
        expect(isSumEqualsToZero(1.0000000003, -0.0000000003, -1)).toBe(true)
    })

    it("works with arbitrary number of arguments", () => {
        expect(isSumEqualsToZero(3, -2, -0.5, -0.4999999999, -0.0000000001)).toBe(true)
    })

    it("works with bigintegers", () => {
        expect(isSumEqualsToZero(3n, -3n)).toBe(true)
    })

    it("works with mixture of bigintegers and numbers", () => {
        expect(isSumEqualsToZero(3n, -3)).toBe(true)
    })

    it("does not break with no args passed", () => {
        expect(isSumEqualsToZero()).toBe(true)
    })
})
