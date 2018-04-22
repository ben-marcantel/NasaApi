"use strict";

const $ = require('jquery');


module.exports.formatData = ((data) => {
    let asteroidsArray = [];
    let dateKeys = Object.keys(data);
    for (let i = 0; i < dateKeys.length; i++) {
        let date = dateKeys[i];
        for (let i = 0; i < data[[date]].length; i++) {
        if ( data[[date]][i].is_potentially_hazardous_asteroid === true) {
         asteroidsArray.push(data[[date]][i].name);
        }}
    }
    return asteroidsArray;
});
