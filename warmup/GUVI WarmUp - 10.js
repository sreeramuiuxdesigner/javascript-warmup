/* MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:turkey = 2 legshorse = 4 legspigs = 4 legsThe farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals. */

function CountLegs(turkey, horse, pigs) {
	///Your code Starts here 
	const turkeyLegs = turkey * 2;
	const horseLegs = horse * 4;
	const pigLegs = pigs * 4;
	
	const totalLegs = turkeyLegs + horseLegs + pigLegs;
	
	return totalLegs;
	
	
	///Your code Ends here
}

console.log(CountAnimals(2, 3, 5));
console.log(CountAnimals(1, 2, 3));
console.log(CountAnimals(5, 2, 8));
/*
Lines For TestCase

CountLegs(2, 3, 5);
CountLegs(1, 2, 3);
CountLegs(5, 2, 8);
*/