/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	///Your code Starts here 
	
	if (isNaN(number)) {
		return -1;
	}
	
	return number % 2 === 0;
	
	
	
	///Your code Ends here
}

console.log(isEven(12));
console.log(isEven(0));
console.log(isEven(11));
console.log(isEven("11h"));
/*
Lines For TestCase

isEven(12);
isEven(0);
isEven(11);
isEven("11h");
*/