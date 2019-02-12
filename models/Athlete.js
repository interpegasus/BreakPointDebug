var mongoose = require('mongoose');
var Team = require('../models/Team.js');
var Sport = require('../models/Sport.js');
var AthleteSchema = new mongoose.Schema({
    displayName: String,
    headshot: String,
    position: String,
    team: Team,
    league: String,
    sport: Sport,
    updated_date: { type: Date, default: Date.now },
});