async function tellJoke() {
    const api = await fetch('https://v2.jokeapi.dev/joke/programming?type=single');
    const data = await api.json();
    const joke = data['joke'];
    console.log(joke);
}

const jokeInterval = setInterval(() => tellJoke(), 2000);

// After 10 seconds, stop telling jokes;
setTimeout(() => clearInterval(jokeInterval), 10000);
