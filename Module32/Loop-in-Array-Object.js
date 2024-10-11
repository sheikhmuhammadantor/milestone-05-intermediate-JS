const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
const numbers = [10, 20, 30, 40, 50];
const car = {
    make: "Honda",
    model: "Civic",
    year: 2022
};

// console.log(fruits);
// console.log(numbers);

// Loop In Array;
for (let fruit of fruits) {
    // console.log(fruit);
}

// Loop In Object;
for (let c in car) {
    // console.log(c , car[c]);
}

// More About Object;
const carKey = Object.keys(car);
const carValue = Object.values(car);
// console.log(carKey);
// console.log(carValue);


// Excrement - 
for (let num in numbers) {
    // console.log(num);
}  // It's Works;

// for (let c of car) {
//     // console.log(c);
//    // It's Not Works;
// }    
