//program to calculate sum and average of all elements in array

let arr = [1,4,6,9]
let sum = 0;
function sumAndAverage (){
    for (i=0; i<arr.length; i++) {
        sum+= arr[i];
    }
    let average= sum / arr.length;
    return {sum, average}
}
let result = sumAndAverage();
console.log(result);

// program to sort an array in ascending order

let arr1 = [3,1,7,4,4,2,9]
for (i=0; i<arr1.length; i++){
    for(j=i+1; j<arr1.length; j++){
        if (arr1[i]>arr1[j]){
            let t = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = t;

        }
    }
}
console.log(arr1);

// program to sort an array in descending order

let arr2 = [3,1,7,4,4,2,9]
for (i=0; i<arr2.length; i++){
    for(j=i+1; j<arr2.length; j++){
        if (arr2[i]<arr2[j]){
            let t = arr2[i];
            arr2[i] = arr2[j];
            arr2[j] = t;

        }
    }
}
console.log(arr2);