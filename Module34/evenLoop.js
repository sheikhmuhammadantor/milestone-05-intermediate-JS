let a = 'antor'
console.log(a);

let c = () => console.log(`Ami arrow Function `);

b()
c()

function b() {
    console.log(`Name amar vutu`)
    c()
}

setTimeout(() => console.log(`first Time Out 1`), 200);
setTimeout(() => console.log(`first Time Out 2`), 201);

fetch('https://jsonplaceholder.typicode.com/todos/1')  // In 200 ms
    .then(response => response.json())
    .then(json => console.log(json));

setTimeout(() => console.log(`Last Time Out`), 200);

c()

console.log(`Last para`);


// Manu Type Of Answer;

/* Answer 1 -
antor
Name amar vutu
Ami arrow Function
Ami arrow Function
Ami arrow Function
Last para
first Time Out 1
first Time Out 2
Last Time Out
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
*/


/* Answer 2 -
antor
Name amar vutu
Ami arrow Function
Ami arrow Function
Ami arrow Function
Last para
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
first Time Out 1
first Time Out 2
Last Time Out
*/


/* Answer 3 -
antor
Name amar vutu
Ami arrow Function
Ami arrow Function
Ami arrow Function
Last para
first Time Out 1
first Time Out 2
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
Last Time Out
*/
