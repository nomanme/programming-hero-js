// problem 01 solve

// kilometerToMeter

function kilometerToMeter(meter) {
	let km = meter * 1000; // 1 km = 1000 meter
	console.log('Check kilometer =>', km);
	return km;
}
let kMeter = kilometerToMeter(18.5);
console.log('Here KiloMeter is =>', kMeter);

// problem 02 solve

// budgetCalculator

function budgetCalculator(watch, phone, laptop) {
	let device = 3 * watch + 2 * phone + 1 * laptop;
	return device;
}
let price = budgetCalculator(50, 100, 500);
console.log('Total Price =>', price);

// problem 03 solve

// hotelCost

function hotelCost(cost) {
	let day = cost;
	if (day <= 10) {
		// console.log('first week cost:', day);
		return day * 100;
	} else if (day <= 20) {
		// console.log('second week cost:', day);
		return 10 * 100 + (day - 10) * 80;
	} else {
		// console.log('third week cost:', day);
		return 10 * 100 + 10 * 80 + (day - 20) * 50;
	}
}
let totalCost = hotelCost(250);
console.log('All tour cost =>', totalCost);
