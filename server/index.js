const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Used to parse JSON bodies

app.use('/api', router); // all api routes in ./router

app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
