/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	///Your code Starts here 
	if (typeof word === "string") {
		return word.length;
	} else {
		return -1;
	}
	
	
	
	
	///Your code Ends here
}

console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));
/*
Lines For TestCase

getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/