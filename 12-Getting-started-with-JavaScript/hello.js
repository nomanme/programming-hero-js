// 12-2 Run JavaScript in browser, VSCode, and codepen
console.log(21);

console.log("Good Morning!");

// 12-3 What is variable, declare a variable, see output
var bananaPrice = 16;
console.log(bananaPrice);

//  12-4 Variable type, Numeric, String, Boolean
var seenAfter = 21;
console.log(typeof seenAfter);

var uname = "kalimuddin zuckerburg";
console.log(typeof uname);

var isHot = true;
var isRich = false;
console.log(typeof isHot);

// 12-5 Variable name naming convention and best practice
var userName = "Hero Alom";
userName = "Hero Abdul";
userName = "Hero Jamal";
userName = "Hero Mosarraf";
console.log(userName);

// 12-6 Explore string case change index split
var promise = "I PROMISE I will HARD work to become a programmer ";
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());
console.log(promise.indexOf("HARD"));
console.log(promise.split(" "));

// 12-7 Integer float parseInt parseFloat type conversion
var number1 = 20;
var number2 = 20.5;
console.log(number1 + number2);

var number3 = 33;
var number4 = "17.5";
number4 = parseFloat(number4); // convert floating number
number4 = parseInt(number4); // convert integer number
console.log(number3 + number4);

var number5 = 30;
var number6 = 40.5;
number5 = "" + number5; // convert string
console.log(typeof number5);

var number7 = 0.1;
var number8 = 0.2;
var total = number7 + number8;
total = total.toFixed(2);
console.log(total);