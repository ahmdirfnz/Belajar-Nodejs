let numbers = [1,6,4,3,7,2,5];
// Method 1
// function isOddNumber(number) {
//     return number % 2;
// }
// const oddNumbers = numbers.filter(isOddNumber);

// Method 2  | Callback
// let oddNumbers = numbers.filter(number => number % 2);

// Method 3
let oddNumbers = numbers.filter(function(number) {
    return number % 2;
});

console.log(oddNumbers);