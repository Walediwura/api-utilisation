const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Kanyin's Dad Joke app, to get a free dad joke change the path to - > /random-joke or copy and paste this link: http://localhost:3000/random-joke")
})

app.get('/random-joke', async(req, res) => {
    try {
        const response = await axios.get('https://dad-jokes.p.rapidapi.com/random/joke', {
            headers: {
                'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
                'x-rapidapi-key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637'
            }
        });

        const joke = response.data.body[0].setup + ' ' + response.data.body[0].punchline;
        res.send(joke);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});



app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});