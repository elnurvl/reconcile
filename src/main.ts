import { Asset, isSumEqualsToZero } from './asset_improved'

function validateInput(val: unknown) {
    if (Number.isNaN(val)) {
        console.log("You must provide 3 numbers separated by spaces.")
    }
}

const [a, b, c] = process.argv.slice(2).map((arg) => {
    let r = Number(arg)
    if (Number.isNaN(r)) {
        console.log("You must provide a number.")
        process.exit(1)
    }
    return r
})

if (a === undefined || b === undefined || c === undefined) {
    console.log("You must provide 3 numbers separated by a space.")
    process.exit(1)
}

console.log(isSumEqualsToZero(a, b, c))