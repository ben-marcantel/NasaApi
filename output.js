"use strict";
const $ = require('jquery');


module.exports.outputPrint = (fuckOff) => {
    $('#message').append(`<h3 class='messages'>${fuckOff}</h3>`);
};