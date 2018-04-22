"use strict";

const $ = require('jquery');
// const apiKey = require('./apiKey/apiKey');



module.exports.getData = (startDate,endDate) => {
    return new Promise( (resolve, reject) => {
      $.ajax({
        url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`
      }).done(data => {
        resolve(data.near_earth_objects);
      }).fail( (error) => reject(error));
    });
  };
