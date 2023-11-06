
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

// Function that returns a multi-line string with each character of the string written on its own line.
// if 'indent' is == true, each line will be preceded by diagonal indentation
function getCharPerLine(str, indent) {
    if (!indent) {
        const myCharacters = str.split('')
        for(let i = 0; i < str.length; i++) {
            if (myCharacters[i] != ' ')
                console.log(myCharacters[i])
        }
    }

    else {
        const myCharacters = str.split('')
        let mySpace = ' '
        for(let i = 0; i < str.length; i++) {
            if (myCharacters[i] != ' ') {
                console.log(mySpace, myCharacters[i])
                mySpace += ' '
            }
        }
    }
}

// Function that returns a multi-line string containing a right-pointing arrow made using asterisks.
function arrow(size) {
    let i = 1
    while (i <= size) {
        let asterisks = ''
        for (let j = 1; j <= i; j++) {
            asterisks += '*'
        }
        console.log(asterisks)
        i++
    }

    i = size - 1
    
    while (i >= 1) {
        let asterisks = ''
        for (let j = 1; j <= i; j++) {
            asterisks += '*'
        }
        console.log(asterisks)
        i--
    }
}



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

// Test Five
console.log("\nTest Five:")
getCharPerLine("Hello World!", false)
getCharPerLine("Hello World!", true)

// Test Six
console.log("\nTest Five:")
arrow(5)
console.log("\n")
arrow(3)