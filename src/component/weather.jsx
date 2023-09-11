import React, { useEffect } from 'react';
import rain from '../image/rain.svg';
import showerrain from '../image/showerrain.svg'
import storm from '../image/storm.gif';
import scatter from '../image/scatter.svg';
import cloudy from '../image/cloudy.svg';
import clouds from '../image/clouds.gif';
import clear from '../image/clear.svg'
import snow from '../image/snow.svg'
import mist from '../image/mist.svg'
import useWeatherStore from '../weatherStore';
import './weather.css';
import Search from './Search';
import Week from './weekweather';


const Weather = () => {
  const { apikey, weatherData, inputValue, setInputValue, setWeatherData, url } = useWeatherStore();
  
  const handleSearchChange = (searchValue) => {
    setInputValue(searchValue);
  };
  const getWeatherIcon = (iconCode) => {
  
    if (iconCode === "01d" || iconCode === "01n") {
      return clear;
    } else if (iconCode === "02d" || iconCode === "02n") {
      return cloudy;
    } else if (iconCode === "03d" || iconCode === "03n") {
      return scatter;
    } else if (iconCode === "04d" || iconCode === "04n") {
      return clouds;
    } else if (iconCode === "09d" || iconCode === "09n") {
      return showerrain;
    } else if (iconCode === "10d" || iconCode === "10n") {
      return rain;
    } else if (iconCode === "11d" || iconCode === "11n") {
      return storm;
    }else if (iconCode === "13d" || iconCode === "13n") {
      return snow;
    } else if (iconCode === "50d" || iconCode === "50n") {
      return mist;
    }  
    else {
      return clear;
    }
  };
  useEffect(() => {
    const fetchWeatherData = async () => {
      let currentweather = '';
      if (inputValue !== "") {
        currentweather = `${url}/weather?lat=${inputValue.lat}&lon=${inputValue.lon}&units=Metric&appid=${apikey}`;
      } else {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            currentweather = `${url}/weather?lat=${lat}&lon=${lon}&units=Metric&appid=${apikey}`;
            await fetchWeather(currentweather);
          }, function (error) {
            console.error("Error getting geolocation:", error);
          });
        } else {
          console.error("Geolocation is not available.");
        }
      }
  
      if (currentweather) {
        await fetchWeather(currentweather);
      }
    };
  
    async function fetchWeather(currentweather) {
      try {
        const response = await fetch(currentweather);
        const data_current = await response.json();

        setWeatherData({
          country: data_current.sys.country ,
          windSpeed: data_current.wind.speed,
          location: data_current.name,
          temperature: Math.floor(data_current.main.temp),
          main: data_current.weather[0].description,
          weatherIconCode: data_current.weather[0].icon,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  
    fetchWeatherData();
  }, [inputValue, apikey]);
  
  return (
    <section>
      <div className='search-container text-center'>
        <Search onSearchChange={handleSearchChange} />
      </div>
      
      <div className="weather flex evenly align-center">
        <div className="icon">
          <img src={getWeatherIcon(weatherData.weatherIconCode)} alt="Weather Icon" />
        </div>
        <div>
          <div className="weatherInfo flex flex-col gap">
            <p> Today</p>
            <h2><i class="fa-solid fa-location-dot"></i> {weatherData.location} , {weatherData.country}</h2>
            <p>Temperature: {weatherData.temperature}°C</p>
            <p>{weatherData.main} </p>
            <p>Wind Speed: {weatherData.windSpeed} m/s</p>
          </div>
          <Week  />
        </div>
      </div>
      
    </section>
  );
};

export default Weather;