const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 },
]

// With For Of Loop;
const withForLoop = (arr) => {
    let sum = 0;
    for (let a of arr) {
        sum += a.age;
    }
    return sum;
}

// With Array.reduce() Method;
const withReduce = (arr) => arr.reduce((a, c) => a + c.age, 0);

console.log(withForLoop(people));
console.log(withReduce(people));