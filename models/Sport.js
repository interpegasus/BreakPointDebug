'use strict';
import fetch from 'node-fetch';
var Season = require('../models/Season.js');
var mongoose = require('mongoose');
var SportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        lowercase: true,
    },
    league: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    enabled: Boolean,
    updated_date: { type: Date, default: Date.now },
});
SportSchema.index({ league: 1 }, { unique: true });
var Sport = mongoose.model('Sport', SportSchema);

export async function createSport(sport, league) 
{
    let sportObject = Sport
        .findOne({
            league: league.abbreviation
        })
        .then(function (sportObject)
        {
            if (sportObject === null)
            {
                sportObject = new Sport({
                    league: league.abbreviation,
                    name: sport.name,
                    enabled: league.abbreviation === 'nba'
                })
                sportObject.save()
                    .then(doc =>
                    {
                        console.log(doc)
                    })
                    .catch(err =>
                    {
                        console.error(err)
                    })
                console.log(sportObject);
            } else
            {
                sportObject.league = league.abbreviation;
                sportObject.name = league.name;
                sportObject.save();
                console.log(sportObject);
            }
        })
        .catch(err => { console.error(err) });
    console.log(sportObject);
    return sportObject;
}

export async function getData(type)
{
    var key = '';
    var url = '';
    if (type === 'sports')
    {
        url = `${ url }/?apikey=${ key }`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        data.sports.forEach(function (sport)
        {
            console.log(sport);
            if (sport.leagues !== undefined && sport.leagues.length > 0)
            {
                sport.leagues.forEach(function (league)
                {
                    console.log(league);
                    if (league)
                    {
                        let sportObject = createSport(sport, league).then(function (result)
                        {
                            console.log(result);
                            let seasonObject = Season.createSeason(value, league);
                            console.log(seasonObject);
                            return result;
                        });
                        console.log(sportObject);

                    }
                });
            }
        });
        return data;
    }
    else if (type === 'teams')
    {
        url = `${ url }/${ sport_object.sport.to_s.downcase }/${ sport_object.league_abbreviation.to_s.downcase }/teams/?limit=100&offset=0${ key }`
    } else if (type === 'athletes')
    {
        url = `${ url }/${ team_object.sport.sport.to_s.downcase }/${ team_object.sport.league_abbreviation.to_s.downcase }/athletes/teams/${ team_object.provider_team_id }?limit=100&offset=0${ key }`
    } else if (type === 'events')
    {
        url = `${ url }/${ sport_object.sport.to_s.downcase }/${ sport_object.league_abbreviation.to_s.downcase }/events/?dates=${ date }&offset=0${ key }`
    }
    return url;
}