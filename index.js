fetch('https://icanhazdadjoke.com/slack')
    .then(Data => Data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('my_joke');
        jokeElement.innerHTML = jokeText;
    })