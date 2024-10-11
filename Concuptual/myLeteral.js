const item = "apple";
const quantity = 3;

function highlight(strings, ...values) {
    // let result = "";
    // for (let i = 0; i < strings.length; i++) {
    //     result += strings[i];
    //     if (i < values.length) {
    //         result += `<strong>${values[i]}</strong>`;
    //     }
    // }
    // return result;
    console.log(strings, values);
    return [strings, values];
}

const message = highlight(5,7)
// console.log(message);

document.getElementById('myP').innerHTML = message; 
