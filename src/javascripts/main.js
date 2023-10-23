//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// Define variables
let n = 10
const h = 100
let is_active = true

if (is_active) {

}

if (!is_active) {

}

if (n % 2 == 0) {
    console.log(n, " is an even number.")
}
else {
    console.log(n, " is an odd number.")
}

function printCharacters(quote) {
    let out = ""
    for(let i = 0; i < quote.length; i++){
        out += quote[i] + '\n'
    }

    return out
}

console.log(printCharacters("To be or not to be!"))

// let i = 0
// while(i < quote.length){
//     console.log(quote[i])
//     i++
// }

// i = 0
// do {
//     console.log(quote[i])
//     i++
// } while (i < quote.length)

// console.log(quote, " has ", quote.length, " Characters")

// console.log(quote.charAt(0))
// console.log(quote[0])

let day = 1

if (day == 1 || day == 7) {
    console.log("Weekend")
}
else if (day > 1 && day < 7){
    console.log('a week day')
}
else {
    console.log("invalid")
}

switch(day){
    case 1: 
        console.log("Weekend")
        break;
    case 2:
        console.log("Weekday")
        break;
    default:
        console.log("Invalid")
}

function calculateY(){

let x = parseInt(document.querySelector("input").value)
let y = 4 * x + 12

document.querySelector(".result").innerHTML = y
}

document.querySelector("#get-result").onclick = calculateY