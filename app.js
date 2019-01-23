const express  = require('express');
const app = express();
const startupDebugger = require('debug')('app:startup');
const config = require('config');
const genres = require('./routes/genres');
const home = require('./routes/home');
const helmet = require('helmet');
const morgan = require('morgan');

startupDebugger(config.get('name'));
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(helmet());
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('Morgan Enabled...');
}  

app.use('/', home);
app.use('/api/genres', genres);

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));

