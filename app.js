const Joi = require('joi');
const express  = require('express');
const app = express();
const genres = require('./routes/genres');

app.use(express.json());
app.use('/api/genres', genres);

app.get('/', (req, res) => { 
  res.send('Welcome to Vidly!');
});

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));

