import React from 'react'

const WeatherOutput = (props) => {
    const { city, description, icon, temperature, temp_min, temp_max, humidity, error} = props;
  return (
    <div class="output">
        <p>{error}</p>
        <p id="city">City: {city}</p>
        <p id="icon">Description: <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description}/> {description}</p>
         <p>Temp current: {temperature}</p>
         <p>Temp min: {temp_min}</p>
         <p>Temp max: {temp_max}</p>
         <p>Humidity: {humidity}</p>
    </div>
  )
}

export default WeatherOutput;
