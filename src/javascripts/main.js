// Function that takes three integers and returns the largest int 
function getMax(x, y, z) {
    if (x > y && x > z) {
        return x
    }

    else if (y > x && y > z) {
        return y
    }

    else {
        return z
    }
}

// Function that takes three integers and returns the smallest int
function getMin(x, y, z) {
    if (x < y && x < z) {
        return x
    }

    else if (y < x && y < z) {
        return y
    }

    else {
        return z
    }
}

// Function that takes three integers and returns the average 
function getMean(x, y, z) {
    return (x + y + z) / 3
}

// Function that takes two strings and returns 0 if the words are the same; 
// returns 1 if word1 is greater than word2; and returns -1 if word1 is smaller than word2
function compare(word1, word2) {
    if (word1.length == word2.length) {
        return 0
    }

    else if (word1.length > word2.length) {
        return 1
    }

    else {
        return -1
    }
}

// TODO: 2 more functions remaining (Refer to week 9 module in CS 2350)

// ~~~~~~~ Here is the console tests for each of the function above. ~~~~~~~~

// Test One
console.log("Test One:")
console.log(getMax(99,55,22), ' is the largest number out of 99, 55, and 22')
console.log(getMax(11,76,42), ' is the largest number out of 11, 76, and 42')
console.log(getMax(12,46,115), ' is the largest number out of 12, 46, and 115')

// Test Two
console.log("\nTest Two:")
console.log(getMin(22,55,99), ' is the smallest number out of 22, 55, and 99')
console.log(getMin(72,11,42), ' is the smallest number out of 72, 11, and 42')
console.log(getMin(115,46,12), ' is the smallest number out of 115, 46, and 12')

// Test Three
console.log("\nTest Three:")
console.log(getMean(22,55,99), ' is the average out of 22, 55, and 99')
console.log(getMean(72,11,42), ' is the average out of 72, 11, and 42')
console.log(getMean(115,46,12), ' is the average out of 115, 46, and 12')

// Test Four 
console.log("\nTest Four:")
console.log(compare('Gigantic', 'World'), " 'Gigantic' > 'World'")
console.log(compare('Hello', 'World'), " 'Hello' == 'World'")
console.log(compare('Tiny', 'World'), " 'Tiny' < 'World'")