var mongoose = require('mongoose');
var Game = require('../models/Game.js');
var Team = require('../models/Team.js');
var Athlete = require('../models/Athlete.js');

var TimelineItemSchema = new mongoose.Schema({
    game: Game,
    text: String,
    type: ['GAME_START_END', 'QUARTER_START_END', 'PTS'],
    points: Number,
    crowd_percentage: Number,
    team: Team,
    athlete: Athlete,
    updated_date: { type: Date, default: Date.now },
});