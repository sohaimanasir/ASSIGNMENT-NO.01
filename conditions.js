// program to check whether a number is positive, negative, or zero

let userInput = parseInt(prompt("Enter any number"));
function checkNumber() {
  if (userInput > 0) {
    console.log("Number is positive");
  } else if (userInput < 0) {
    console.log("Number is negative");
  } else {
    console.log("Number is zero");
  }
}

checkNumber();

//function to add two numbers
let a = 7; //you can write any number here i am not making prompt again and again (Sorry)
let b = 5;

let SumOfNum = (a, b) => a + b;
console.log(SumOfNum(a, b));

//function to subtract two numbers
let c = 7; //you can write any number here i am not making prompt again and again (Sorry)
let d = 5;

let subtractNum = (a, b) => a - b;
console.log(subtractNum(c, d));

//function to multiply two numbers
let e = 7; //you can write any number here i am not making prompt again and again (Sorry)
let f = 5;

let multiplyNum = (a, b) => a * b;
console.log(multiplyNum(e, f));

//function to divide two numbers
let g = 7; //you can write any number here i am not making prompt again and again (Sorry)
let h = 5;

let divideNum = (a, b) => g / h;
console.log(divideNum(a, b));
