var mongoose = require('mongoose');
var Game = require('../models/Game.js');
var LeaderboardSchema = new mongoose.Schema({
    username: String,
    points: Number,
    game: Game,
    updated_date: { type: Date, default: Date.now },
});