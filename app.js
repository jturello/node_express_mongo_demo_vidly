const Joi = require('joi');
const express  = require('express');
const app = express();
const genres = require('./routes/genres');
const home = require('./routes/home');

app.use(express.json());
app.use('/api/genres', genres);
app.use('/', home);

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));

