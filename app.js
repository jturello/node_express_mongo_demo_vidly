const Joi = require('joi');
const express  = require('express');
const app = express();

app.use(express.json());


const genres = [
  { "id": "1", "name": "Drama" },
  { "id": "2", "name": "Action" },
  { "id": "3", "name": "Horror" },
  { "id": "4", "name": "Comedy" },
  { "id": "5", "name": "Science Fiction" }
];

app.get('/api/genres', (req, res) => {
  console.log('in app.get(api/genre');
  res.send(genres);
});


const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));

