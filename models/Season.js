var mongoose = require('mongoose');
var Sport = require('../models/Sport.js');
var SeasonSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        lowercase: true,
    },
    year: {
        type: Number,
        required: true,

    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    sport: {
        type: Sport,
        required: true,
    },
    updated_date: { type: Date, default: Date.now },
});
SeasonSchema.index({ description: 1, endDate: 1 }, { unique: true });

var Season = mongoose.model('Season', SeasonSchema);

export function createSeason(sportObject, league) 
{
    console.log(sportObject, league);
    let seasonObject = Season
        .findOne({
            description: league.season.description,
            endDate: league.season.endDate,
        })
        .then(function (seasonObject)
        {
            if (seasonObject === null)
            {
                seasonObject = new Season({
                    description: league.season.description,
                    year: league.season.year,
                    startDate: league.season.startDate,
                    endDate: league.season.endDate,
                    sport: sportObject
                })
                seasonObject.save()
                    .then(doc =>
                    {
                        console.log(doc)
                    })
                    .catch(err =>
                    {
                        console.error(err)
                    })
                console.log(seasonObject);
            } else
            {
                console.log(seasonObject);
            }
        })
        .catch(err => { console.error(err) });
    return seasonObject;
}