function isBinary (input) {
	for(let i = 0; i < input.length; i++) {
		if (input[i] !== "0" && input[i] !== "1") { 
			return false; 
		};
	}

	return true;
}

function inputTaker () {
	let input;
	let number;
	while (true) {
		input = prompt("enter a binary number, q to quit");

		if (input.toLowerCase() === "q") { return }

		number = parseInt(input);

		if (!Number.isNaN(number) && input.trim != "") {
			if (isBinary(input)) {
				console.log("Binary Digit: " + number);
				break;
			}
		} else {
			console.log("You have entered invalid binary number");
		}
	}

	return number;
}

function binaryConverter (binaryDigit) {
	let decimalNumber = 0;
	let remainder;
	let base = 1;

	while(binaryDigit > 0) {
		remainder = binaryDigit % 10;
		decimalNumber += remainder * base;
		binaryDigit = Math.floor(binaryDigit / 10)
		base *= 2;
	}

	return decimalNumber;
}

let userInput = inputTaker();
let result = binaryConverter(userInput);
console.log("Decimal number: " + result);
