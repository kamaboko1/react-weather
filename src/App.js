import React, { Component } from 'react';
import WeatherOutput from './components/WeatherOutput';
import InputForm from './components/InputForm';
import Header from './components/Header';
import './App.css';

class App extends Component {

  state = {
     city: '',
     description: '',
     icon: '',
     temperature: '',
     temp_min: '',
     temp_max: '',
     humidity: '',
     error: ''
  }

  getWeather = async (e) => {

    //resets output fields before running complete function
    this.setState({
      city: '',
      description: '',
      icon: '',
      temperature: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
      error: ''
    })

    const key = 'f55188ca16c3bc09749ffaa56f724f0c';
    
    e.preventDefault();

    const city = e.target.elements.city.value;

    const run_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
    const data = await run_api.json();


    if(city && data.name){
        this.setState({
          city: data.name,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          temperature: data.main.temp.toFixed(0)+ String.fromCharCode(176) + String.fromCharCode(70),
          temp_min: data.main.temp_min.toFixed(0)+ String.fromCharCode(176) + String.fromCharCode(70),
          temp_max: data.main.temp_max.toFixed(0)+ String.fromCharCode(176) + String.fromCharCode(70),
          humidity: data.main.humidity
        })
    }else{
      this.setState({
        error: "Input error. Please check and re-submit",
      })
    }
  }



  render() {
    const {city, description, icon, temperature, temp_min, temp_max, humidity, error} = this.state;
    return (
      <div className="App">
        <Header title="Your Weather App" />
        <InputForm getWeather={this.getWeather}/>
        <WeatherOutput 
            city={city}
            description={description}
            icon={icon}
            temperature={temperature}
            temp_min={temp_min}
            temp_max={temp_max}
            humidity={humidity}
            error={error}
        />
        
      </div>
    );
  }
}

export default App;
