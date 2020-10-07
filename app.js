//const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || '3000'
const routes = require('./routes/routes')
// middlewares
//app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use('/data',routes);
//app.use('/api/movies', require('./routes/movies'));
// starting the server
app.listen(port, () => {
    console.log('http://localhost:3000/');
});