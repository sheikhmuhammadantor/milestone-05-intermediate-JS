// const person = {
//     name: "John",
//     age: 30,
// };


let person = {

};

const addData = () => {
    const keyFled = document.getElementById('keyFled');
    const valueFled = document.getElementById('valueFled');

    const key = keyFled.value;
    const value = valueFled.value;

    if (key || value) {
        person[key] = value;
    }
    console.log(person);

    localStorage.setItem('person', localData || JSON.stringify(person));
    const a = localStorage.getItem('person');
    obj = a;
    // getData();
}

document.getElementById('addData').addEventListener('click', addData);

const localData = localStorage.getItem('person');
localStorage.setItem('person', localData || JSON.stringify(person));


const displayData = (data) => {
    const ul = document.getElementById('list');
    ul.innerHTML = '';

    for (let key in data) {
        const li = document.createElement('li');
        li.innerHTML = `${key} : ${data[key]}`;
        ul.appendChild(li);
    }
}

const getData = () => {
    const data = localStorage.getItem('person');
    let a = {}
    if (data) {
        const dataParse = JSON.parse(data);
        displayData(dataParse);
    } else {
        displayData({});
    }

}

getData()
