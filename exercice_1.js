const numbers = [1, 3, 4, 11, 9, 10, 12, 34, 17];

// problem :
// use chained function to return
// sum of squares of elements in numbers
// only if the element's square is superior to 100
// expected result 1710

let squareSum = numbers
                .map((x) => x ** 2)
                .filter((x) => (x > 100))
                .reduce((startValue, currentValue) => startValue +  currentValue) ;
console.log(squareSum) ;
