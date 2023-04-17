let result: string = "";

for (let i: number = 1; i <= 100; i++) {
	if ((i % 3 === 0) && (i % 5 === 0)) {
		result += "FizzBuzz"
	} else if (i % 3 === 0) {
		result += "Fizz";
	} else if (i % 5 === 0) {
		result += "Buzz";
	} else {
		result += String(i);
	}
	if (i !== 100) {
		result += " ";
	} else {
		result += "¥n";
	}
}
console.log(result);
