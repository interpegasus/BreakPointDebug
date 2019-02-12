var mongoose = require('mongoose');
var Event = require('../models/Event.js');
var Sport = require('../models/Sport.js');
var TimelineItem = require('../models/TimelineItem.js');
var LeaderboardItem = require('../models/LeaderboardItem.js');
var Athlete = require('../models/Athlete.js');
var UserPointsItem = require('../models/UserPointsItem.js');
var GameSchema = new mongoose.Schema({
    event: Event,
    sport: Sport,
    timeline: [TimelineItem],
    homeTeamLeaderboard: [LeaderboardItem],
    awayTeamLeaderboard: [LeaderboardItem],
    currentUserAthletesInCourt: [Athlete],
    currentUserAthleteOptions: [Athlete],
    currentUserPoints: [UserPointsItem],
    gameWinner: LeaderboardItem,
    updated_date: { type: Date, default: Date.now },
});