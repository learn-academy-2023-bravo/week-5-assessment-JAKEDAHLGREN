// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("coder", () => {
	it("takes in a string and returns a string with a coded message", () => {
		const secretCodeWord1 = "Lackadaisical"
		// Expected output: "L4ck4d41s1c4l"
		const secretCodeWord2 = "Gobbledygook"
		// Expected output: "G0bbl3dyg00k"
		const secretCodeWord3 = "Eccentric"
		// Expected output: "3cc3ntr1c"
		expect(coder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
		expect(coder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
		expect(coder(secretCodeWord3)).toEqual("3cc3ntr1c")
	})
})

// Test Failed:
// ● coder › takes in a string and returns a string with a coded message
// ReferenceError: coder is not defined

// b) Create the function that makes the test pass.

// Pseudo

// Input: string
// Output: string with a coded message
// Expect:"L4ck4d41s1c4l" "G0bbl3dyg00k" "3cc3ntr1c"

// Process

// Declare a function called coder = (string) => {  }, with the parameter string
// Use .replaceAll() and use the given code instructions to set the condition of the method
// "a" to 4, "e" to 3, "i" to 1, and "o" to 0 ex: string.replaceAll("a", "4")
// Return

// Function

const coder = (string) => {
	return string
		.replaceAll("a", "4")
		.replaceAll("e", "3")
		.replaceAll("E", "3")
		.replaceAll("i", "1")
		.replaceAll("o", "0")
}

//  Passed

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("fruitLetter", () => {
	it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
		const fruitArray = [
			"Mango",
			"Cherry",
			"Apricot",
			"Blueberry",
			"Peach",
			"Kiwi",
		]
		const letterA = "a"
		// Expected output: ["Mango", "Apricot", "Peach"]
		const letterE = "e"
		// Expected output: ["Cherry", "Blueberry", "Peach"]
		expect(fruitLetter(fruitArray, letterA)).toEqual([
			"Mango",
			"Apricot",
			"Peach",
		])
		expect(fruitLetter(fruitArray, letterE)).toEqual([
			"Cherry",
			"Blueberry",
			"Peach",
		])
	})
})

// Test Failed
//  ● fruitLetter › takes in an array of words and a single letter and returns an array of all the words containing that particular letter
// ReferenceError: fruitLetter is not defined

// b) Create the function that makes the test pass.

// Pseudo

// Input: array & string
// Output: array with only string values containing the required letter
// Expect: ["Mango", "Apricot", "Peach"] ["Cherry", "Blueberry", "Peach"]

// Process

// Declare a function called fruitLetter
// Set parameter to (array, string) => { }
// Use array.filter() with the argument (value) => value.toLowerCase().includes(string) 
// the argument is saying take the array index value, which is a string, use the string method toLowerCase and check if it includes the given letter(string), if it does return the original string value to new array, if not leave it out. 
// return
//

// Function

const fruitLetter = (array, string) => {
	return array.filter((value) => value.toLowerCase().includes(string))
}

// Passed

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("twoThree", () => {
	it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
		const hand1 = [5, 5, 5, 3, 3]
		// Expected output: true
		const hand2 = [5, 5, 3, 3, 4]
		// Expected output: false
		const hand3 = [5, 5, 5, 5, 4]
		// Expected output: false
		const hand4 = [7, 2, 7, 2, 7]
		// Expected output: true
		expect(twoThree(hand1)).toEqual(true)
		expect(twoThree(hand2)).toEqual(false)
		expect(twoThree(hand3)).toEqual(false)
		expect(twoThree(hand4)).toEqual(true)
	})
})

// Test Failed:
//   ● twoThree › takes in an array of 5 numbers and determines whether or not the array is a 'full house'
// ReferenceError: twoThree is not defined

// b) Create the function that makes the test pass.

// Pseudo

// Input: array
// Output: boolean value true or false
// Expect: true, false, false, true

// Process

// Declare a function called twoThree
// Set parameter to array
// Declare a new variable of cards
// Set cards equal to array.sort(), so that all like elements are next to each other
// Use If else statement
// If card[0] === card[1] && card[2] === card[4] return true
// else if card[0] === card[2] && card[3] === card[4] return true
// else return false

const twoThree = (array) => {
	const cards = array.sort((a, b) => a - b)
	if (
    cards[0] === cards[1] && 
    cards[2] === cards[3] && 
    cards[2] === cards[4]
  ) {
		return true
	} else if (
		cards[0] === cards[1] &&
		cards[0] === cards[2] &&
		cards[3] === cards[4]
	) {
		return true
	} else {
		return false
	}
}

// Passed

// I originaly used the logic if (cards[0] === cards[1] && cards[2] === cards[4]) and else if (cards[0] === cards[2] && cards[3] === cards[4]), but it was brought to my attention that this was assuming the value for one of the cards, and it might fail on an edge case when there was a hand of unique card values.

// Firt attempt

// const twoThree = (array) => {
//   array.sort
//   return array.every((value) =>
//   value [0] === value [1] ||
//   value [0] === value [2] &&
//   value [3] === value [4] ||
//   value [2] === value [4])
//   }

// Second attempt
//  I was trying to figure out how to use .forEach, but I could never get the logic setup correctly and unfortunately I deleted it out of frustration, so don't have it to refactor...
