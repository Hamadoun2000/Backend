'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userRouter = require('./routes/userRoute');

//create application/json parser
var jsonParser = bodyParser.json();

//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

//setup routes
app.use('/user', userRouter);
app.use(jsonParser);
app.use(urlencodedParser);


//start the server
var port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});