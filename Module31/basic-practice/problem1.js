const arr = [1, 3, 5, 7, 9];

// Using For Of Loop;
function evenFor(arr) {
    let myArr = [];
    for (let a of arr) {
        a % 2 == 0 ? myArr.push(a) : myArr.push(a + 1);
    }
    return myArr;
}

// Using Map Method;
const evenMap = (arr) => arr.map((a) => a % 2 == 0 ? a : a + 1);

console.log(evenFor(arr));
console.log(evenMap(arr));

// console.log(arr.map((a) => a % 2 == 0 ? a : a + 1));   // This can be done as well;
