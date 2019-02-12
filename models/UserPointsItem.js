var mongoose = require('mongoose');
var Game = require('../models/Game.js');
var Athlete = require('../models/Athlete.js');
var TimelineItem = require('../models/TimelineItem.js');
var Event = require('../models/Event.js');
var UserPointsItemSchema = new mongoose.Schema({
    game: Game,
    event: Event,
    timelineItem: TimelineItem,
    username: String,
    points: Number,
    athlete: Athlete,
    timestamp: Number,
    updated_date: { type: Date, default: Date.now },
});