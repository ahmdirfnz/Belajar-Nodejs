let numbers = [1,6,4,3,7,2,5];

function isOddNumber(number) {
    return number % 2;
}

const oddNumbers = numbers.filter(isOddNumber);

console.log(oddNumbers);