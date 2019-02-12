var express = require('express');
var router = express.Router();
import { getData } from '../models/Sport.js';

// middleware to use for all requests
router.use(function (req, res, next)
{
    console.log('Auth.');
    next(); // make sure we go to the next routes and don't stop here
});


/* GET home page. */
router.get('/', function (req, res, next)
{
    console.log('Something is happening again.');
    res.json({ message: 'Battle Royale API Check OK' });
});



router.get('/sports', async (req, res) =>
{
    let data = await getData('sports');
    res.json({ response: data });
});
module.exports = router;