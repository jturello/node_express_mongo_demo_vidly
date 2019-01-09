const Joi = require('joi');
const express  = require('express');
const app = express();

app.use(express.json());


const genres = [
  { "id": 1, "name": "Drama" },
  { "id": 2, "name": "Action" },
  { "id": 3, "name": "Horror" },
  { "id": 4, "name": "Comedy" },
  { "id": 5, "name": "Science Fiction" }
];

app.get('/', (req, res) => { 
  res.send('Welcome to Vidly!');
});

app.get('/api/genres', (req, res) => {
  res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) return res.status(400).send(`Genre with ID ${req.params.id} not found`);
  
  res.send(genre);
});

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));

