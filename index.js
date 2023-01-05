const express = require('express');
const app = express();
const request=require('request');

const data=[
    {latitude : 13.3379, longitude: 77.1173}
];

const forecast=(data,callback)=>{
    const urlWeather='https://api.openweathermap.org/data/2.5/onecall?lat='+data.latitude+'&lon='+data.longitude+'&exclude=minutely&appid=b2272c61fa75842f25b0705990745621&units=metric';

    request({url:urlWeather, json: true},(error,response)=>{
        if(error)
        callback('Unable to Connect',undefined)
        else if(response.body.error)
       callback('Cannot Find Location',undefined)
        else{
            callback(undefined,response.body);
        }
    })
}

forecast(data);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}`));