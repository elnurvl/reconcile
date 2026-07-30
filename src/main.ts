import { Asset, isSumEqualToZero } from './asset'

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