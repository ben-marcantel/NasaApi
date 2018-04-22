"use strict";

const $ = require('jquery');
const output = require('./output');

let prefix = ["look", "off", "outside", "yoda", "you", "thinking", "think", "bus"];

module.exports.asteroidResponse = (name, randomNumber) => {
    return new Promise( (resolve, reject) => {
        $.ajax({
            url: `http://www.foaas.com/${prefix[randomNumber]}/${name}/Earth`
        }).done( (data) => {
             output.outputPrint($(data).find('.hero-unit').text());
        }).fail( (err) => {
            console.log("ERROR", err);
            reject(err);
        });
    });
};