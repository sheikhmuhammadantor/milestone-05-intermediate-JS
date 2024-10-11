const numbers = [11, 25, 63, 14, 25, 16, 7, 18, 29, 10];

const fun = (arr) => numbers.map((num) => num*num).reduce((aq, cr) => aq + cr,0) / numbers.length;

const result = fun(numbers);
console.log('The Average is :', result);
