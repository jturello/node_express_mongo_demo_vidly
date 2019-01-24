const express  = require('express');
const app = express();
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');

const home = require('./routes/home');
const about = require('./routes/about');
const genres = require('./routes/genres');

const helmet = require('helmet');
const morgan = require('morgan');

startupDebugger(config.get('name'));
// line below throws an error if host env variable db_pwd is not set
// dbDebugger('DB pwd: ' + config.get('db.pwd'));

app.set('view engine', 'pug');
app.set('views', './views'); // default

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(helmet());
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('Morgan Enabled...');
}  

app.use('/', home);
app.use('/about', about);
app.use('/api/genres', genres);

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));
