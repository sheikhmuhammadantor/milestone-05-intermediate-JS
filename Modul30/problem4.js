const fendNam = ["Alicia", "Bob", "Charlie", "David", "Evan", "Frank", "Grace", "Hannah"];


const fun = (arr) => arr.filter((nam) => nam.length % 2 == 0);

const result = fun(fendNam);
console.log(result);
