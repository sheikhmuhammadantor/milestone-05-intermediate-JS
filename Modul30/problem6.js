const number1 = [10, 20, 30, 40, 50];
const number2 = [5, 15, 25, 35, 45];


const fun = (arr1, arr2) =>  Math.max(...[...arr1, ...arr2]);

const result = fun(number1, number2);
console.log(result);
