var mongoose = require('mongoose');
var Sport = require('../models/Sport.js');
var Season = require('../models/Season.js');

var GameSchema = new mongoose.Schema({
    sport: Sport,
    season: Season,
    title: String,
    homeTeamName: String,
    homeTeamLogo: String,
    homeTeamCity: String,
    homeTeamScore: Number,
    awayTeamName: String,
    awayTeamLogo: String,
    awayTeamCity: String,
    awayTeamScore: Number,
    startDateTime: Date,
    status: String,
    quarter: String,
    clock: String,
    updated_date: { type: Date, default: Date.now },
});