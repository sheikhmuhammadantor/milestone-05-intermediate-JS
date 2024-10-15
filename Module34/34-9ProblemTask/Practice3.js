async function programmingJoke () {
    const api = await fetch('https://v2.jokeapi.dev/joke/programming?type=single');
    const data = await api.json();
    const joke = data['joke'];
    console.log(joke);
}

programmingJoke();
