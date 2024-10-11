const person = {
    name: "John Doe",
    age: 30,
    profession: "Software Developer",
    location: "New York",
    isLogin: false
};


// And Op.
console.log(`${person?.name && 'Tolha'}`);      // Tolha
console.log(`${person?.names && 'Tolha'}`);     // undefined

// OR Op..
console.log(`${person?.name || 'Tolha'}`);      // John Doe
console.log(`${person?.names || 'Tolha'}`);     // Tolah

// ??
// Only For undefine and null ; ignore falsy value;
console.log(`${person?.name ?? 'Tolha'}`);      // John Doe
console.log(`${person?.names ?? 'Tolha'}`);     // Tolha
