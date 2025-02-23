// Function to find minimum number from array

let arr = [2, 4, 1, 8, 4, 88, 99, 35];
function minNum() {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(minNum());

// Function to find maximum number from array

let arr1 = [2, 4, 1, 8, 4, 88, 99, 35];
function maxNum() {
  let max = arr1[0];
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
      max = arr1[i];
    }
  }
  return max;
}

console.log(maxNum());

//  a program to check if a given string is a palindrome using loops and function
