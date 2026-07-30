import { isSumEqualsToZero } from './asset_improved'

function validateInput(val: unknown) {
    if (Number.isNaN(val)) {
        console.log("You must provide 3 numbers separated by spaces.")
    }
}

const args = process.argv.slice(2).map((arg) => {
    let r = Number(arg)
    if (Number.isNaN(r)) {
        console.log("You must provide a number.")
        process.exit(1)
    }
    return r
})

console.log(isSumEqualsToZero(...args))