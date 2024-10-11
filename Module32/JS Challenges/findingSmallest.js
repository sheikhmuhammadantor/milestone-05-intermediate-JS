// const numbers = [10, 33, 5, 99, 6]

// function findingSmallest(numbers) {
//     return numbers.reduce((smallest, current) => {
//         smallest < current ? smallest : current;
//     })
// }

// console.log(findingSmallest(numbers));


const numbers = [10, 33, 5, 99, 6];

function findingSmallest(numbers) {
    return numbers.reduce((smallest, current) => {
        return smallest < current ? smallest : current;
    });
}

console.log(findingSmallest(numbers));