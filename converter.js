function isBinary (input) {
	if (Number.isNaN(parseInt(input)) && input.trim() === "") { return false };

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

	while(binaryDigit > 0) {
		remainder = binaryDigit % 10;
		decimalNumber += remainder * base;
		binaryDigit = Math.floor(binaryDigit / 10)
		base *= 2;
	}

	return decimalNumber;
}

function resultDisplay (binary) {
	if (binary === "") { 
		display.textContent = "";
	} else if (isBinary(binary)) {
		display.textContent = binaryConverter(binary);
	} else {
		display.textContent = "invalid input";
	}	
}

const inputs = document.querySelector("#binary-input");
let display = document.querySelector(".result");
inputs.addEventListener("input", (event) => {
	let value = event.target.value;
	resultDisplay(value)
});

