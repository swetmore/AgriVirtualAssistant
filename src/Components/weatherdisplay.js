import React from 'react';
var moment = require('moment');

const WeatherDisplay = ({ reading }) => {
  var parts = reading.datetime.split('-');
  var mydate = new Date(parts[0], parts[1] - 1, parts[2]);

  return (
    <div className="col-lg-2" >
      <h4>{moment(mydate).format('dddd')}</h4>
      <p className="text-muted">{moment(mydate).format('MMMM Do')}</p>
      <img src={`http://weatherbit.io/static/img/icons/${reading.weather.icon}.png`} alt='weather icon' />
      <h4>{Math.round(reading.max_temp)} °F</h4>
      <h4>{Math.round(reading.min_temp)} °F</h4>
    </div>
  )
}
export default WeatherDisplay;