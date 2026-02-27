function isBinary (input) {
	if (Number.isNaN(parseInt(input)) || input.trim() === "") { return false };

	for(let i = 0; i < input.length; i++) {
		if (input[i] !== "0" && input[i] !== "1") { 
			return false; 
		};
	}

	return true;
}


function binaryConverter (binaryDigit) {
	let decimalNumber = 0;
	let remainder;
	let base = 1;

	binaryDigit = parseInt(binaryDigit);
	if (binaryDigit === 0) { return 0 };

	while(binaryDigit > 0) {
		remainder = binaryDigit % 10;
		decimalNumber += remainder * base;
		binaryDigit = Math.floor(binaryDigit / 10)
		base *= 2;
	}

	return decimalNumber;
}

function decimalConverter (decimalNumber) {
	let binaryDigit = [];
	let decimal = parseFloat(decimalNumber);
	
	if (Number.isNaN(decimal) || decimalNumber.trim() === "" || !Number.isInteger(decimal)) {
		return false; 
	} else if (decimal < 0) {
		return false;
	} else if (decimal === 0) {
		return 0; 
	}

	while (decimal > 0) {
		binaryDigit.push(decimal % 2);
		decimal = Math.floor(decimal / 2);
	}

	return parseInt(binaryDigit.reverse().join(''));
}

function binaryConversionDisplay (binary, displayer) {
	if (binary === "") { 
		displayer.textContent = "";
	} else if (isBinary(binary)) {
		displayer.textContent = binaryConverter(binary);
	} else {
		displayer.textContent = "invalid input";
	}	
}

function decimalConversionDisplay (decimal, displayer) {
	let display = document.querySelector(".result");
	if (decimal === "") { 
		displayer.textContent = "";
	} else if (decimalConverter(decimal) !== false) {
		displayer.textContent = decimalConverter(decimal);
	} else {
		displayer.textContent = "invalid input";
	}	
}

const resultHeader = document.querySelector("#number-type-displayer");
const select = document.querySelector("#number-type-selecter");
const inputs = document.querySelector("#binary-input");
let numberType = "binary";

select.addEventListener("change", (event) => {
	if (event.target.value === "binary") {
		resultHeader.textContent = "Decimal Number:";
		inputs.placeholder = "1011";
	} else {
		resultHeader.textContent = "Binary Number:";
		inputs.placeholder = "23";
		numberType = "decimal";
	}
});

const display = document.querySelector(".result");

inputs.addEventListener("input", (event) => {
	let value = event.target.value;
	if (numberType === "binary") {
		binaryConversionDisplay(value, display);
	} else {
		decimalConversionDisplay(value, display);
	}
});



