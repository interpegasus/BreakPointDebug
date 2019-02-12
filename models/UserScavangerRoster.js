var mongoose = require('mongoose');
var Game = require('../models/Game.js');

var Athlete = require('../models/Athlete.js');
var UserScavangerRosterSchema = new mongoose.Schema({
    game: Game,
    athletes: [Athlete],
    updated_date: { type: Date, default: Date.now },
});