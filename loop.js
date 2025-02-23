// program to print the multiplication table of a number entered by the user

let userInput = parseInt(prompt("Enter any number here"));
for (i = 1; i <= 10; i++) {
  console.log(`${userInput} * ${i} = ${userInput * i}`);
}

//program to print all prime numbers between 1 and 100

for (let num = 2; num <= 100; num++) {
  let i;
  for (i = 2; i <= num; i++) {
    if (num % i === 0) break;
  }
  if (i * i > num) console.log(num);
}
