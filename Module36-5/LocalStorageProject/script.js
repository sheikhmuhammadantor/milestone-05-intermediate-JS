

const addData = () => {
    const keyFled = document.getElementById('keyFled');
    const valueFled = document.getElementById('valueFled');

    const key = keyFled.value;
    const value = valueFled.value;

    if(key || value){
        setLocalStorageData(key, value)
    }


    // displayData(key, value);
}

const displayData = (obj) => {
    const ul = document.getElementById('list');

    for (let key in obj) {
        const li = document.createElement('li');
        li.innerHTML = `${key} : ${obj[key]}`;
        ul.appendChild(li);
    }

}

document.getElementById('addData').addEventListener('click', addData);


const getLocalStorageData = () => {
    let user = {}
    const localUser = localStorage.getItem('user');
    if (localUser) {
        console.log(localUser);
        displayData(JSON.parse(localUser));
        return JSON.parse(localUser);
        
    } else {
        return user;
    }
}

// console.log(getLocalStorageData())
const setLocalStorageData = (key, value) => {
    const obj = getLocalStorageData()
    console.log(obj);
    // obj[key] = value;



    const objStringify = JSON.stringify(obj);
    localStorage.setItem('user', objStringify);

    displayData (obj)
}

