const morgan = require('morgan');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use(require('./routes'));
//app.use('/api/movies', require('./routes/movies'));
// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});