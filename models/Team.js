var mongoose = require('mongoose');
var Sport = require('../models/Sport.js');
var TeamSchema = new mongoose.Schema({
    sport: Sport,
    league: String,
    name: String,
    city: String,
    logo: String,
    updated_date: { type: Date, default: Date.now },
});