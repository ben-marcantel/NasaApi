"use strict";

const $ = require('jquery');
const factory = require('./nasaData');
const format = require('./dataFormat');
const swear = require('./swearFactory');

let startDate = "";
let endDate = "";
let count = 0;

$('#start, #finish').change(() => {
    startDate = $('#start').val();
    endDate = $('#finish').val();
});

$('#submit').on("click", () => {

    let count = 0;
    $('#message').html('');
    factory.getData(startDate, endDate)
    .then((data) => {
        return format.formatData(data);
    })
    .then( (dangerAsteroids) => {
        dangerAsteroids.forEach((name) => {
            count += 1;
            if (count <= 3) {
            let randomNumber = Math.floor((Math.random()*(7))+1);
            swear.asteroidResponse(name, randomNumber);
        }});
    })
    .catch((err)=> {
        window.alert("Maximum one week span allowed!-Reread the instructions-'2002");
    });
});
