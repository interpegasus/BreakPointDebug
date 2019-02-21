import express from 'express';
var syncData = require('./routes/sync-data');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var localhost = true;

var localhost = true;
const developmentMode = true;
module.exports = { localhost: localhost };


// Angular Component Route
app.use('/games', express.static(path.join(__dirname, 'dist')));
// Express API
app.use('/api', syncData);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));

app.use(express.static(path.join(__dirname, 'dist')));

// Swagger Docs
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Cron Jobs
var cron = require('node-cron');
cron.schedule('* * * * * *', () =>
{
    console.log('running a task every second');
});

// catch 404 and forward to error handler
app.use(function (req, res, next)
{
    var err = new Error('Not Found');
    err.status = 404;
    console.log(err);
    next(err);
});

// error handler
app.use(function (err, req, res, next)
{
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    console.log(err);
    next(err);
});

module.exports = app;