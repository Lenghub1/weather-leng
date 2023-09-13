import React, { useState, useEffect } from 'react';
import rain from '../image/rain.svg';
import nightrain from '../image/nightrain.svg'
import showerrain from '../image/showerrain.svg'
import storm from '../image/storm.svg';
import scatter from '../image/scatter.svg';
import cloudy from '../image/cloudy.svg';
import nightcloudy from '../image/nightcloudy.svg'
import clouds from '../image/clouds.svg';
import nightclouds from '../image/nightclouds.svg'
import clear from '../image/clear.svg'
import nightclear from '../image/nightclear.svg'
import snow from '../image/snow.svg'
import mist from '../image/mist.svg'
import useWeatherStore from '../weatherStore';
import Loading from './loading';
import './weather.css';
import Search from './Search';
import Week from './weekweather';

const Weather = () => {
  const { apikey, weatherData, inputValue, setInputValue, setWeatherData, url } = useWeatherStore();
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (searchValue) => {
    setInputValue(searchValue);
  };

  const getWeatherIcon = (iconCode) => ({
    "01d": clear,
    "01n": nightclear,
    "02d": cloudy,
    "02n": nightcloudy,
    "03d": scatter,
    "03n": scatter,
    "04d": clouds,
    "04n": nightclouds,
    "09d": showerrain,
    "09n": showerrain,
    "10d": rain,
    "10n": nightrain,
    "11d": storm,
    "11n": storm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
  }[iconCode]);
  

  const getPolution = (polution) => {
    if (polution === 1) {
      return 'Good'
    } else if (polution === 2) {
      return 'Fair'
    } else if (polution === 3) {
      return 'Moderate'
    } else if (polution === 4) {
      return 'Poor'
    } else if (polution === 5)
      return 'Very Poor'
  };

  const getWeekday = (date) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
  };

  const fetchWeatherData = async (lat, lon) => {
    const currentweather = `${url}/weather?lat=${lat}&lon=${lon}&units=Metric&appid=${apikey}`;
    const polutionweather = `${url}/air_pollution?lat=${lat}&lon=${lon}&units=Metric&appid=${apikey}`;
    const forecest = `${url}/forecast?lat=${lat}&lon=${lon}&units=Metric&appid=${apikey}`;

    try {
      const [currentResponse, polutionResponse, forecastResponse] = await Promise.all([
        fetch(currentweather),
        fetch(polutionweather),
        fetch(forecest)
      ]);

      const [currentData, polutionData, forecastData] = await Promise.all([
        currentResponse.json(),
        polutionResponse.json(),
        forecastResponse.json()
      ]);

      const stepdata_forecest = [];
      for (let i = 0; i < forecastData.list.length; i += 8) {
        stepdata_forecest.push(forecastData.list[i]);
      }

      setWeatherData({
        country: currentData.sys.country,
        windSpeed: currentData.wind.speed,
        location: currentData.name,
        temperature: Math.round(currentData.main.temp),
        main: currentData.weather[0].description,
        weatherIconCode: currentData.weather[0].icon,
        polution: polutionData.list[0].main.aqi,
        dt_txt_1: getWeekday(new Date(stepdata_forecest[1].dt_txt)),
        degree1: Math.round(stepdata_forecest[1].main.temp),
        dt_txt_2: getWeekday(new Date(stepdata_forecest[2].dt_txt)),
        degree2: Math.round(stepdata_forecest[2].main.temp),
        dt_txt_3: getWeekday(new Date(stepdata_forecest[3].dt_txt)),
        degree3: Math.round(stepdata_forecest[3].main.temp),
        dt_txt_4: getWeekday(new Date(stepdata_forecest[4].dt_txt)),
        degree4: Math.round(stepdata_forecest[4].main.temp),
        icon1: stepdata_forecest[1].weather[0].icon,
        icon2: stepdata_forecest[2].weather[0].icon,
        icon3: stepdata_forecest[3].weather[0].icon,
        icon4: stepdata_forecest[4].weather[0].icon,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    setLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchWeatherData(lat, lon);
      }, function (error) {
        console.error("Error getting geolocation:", error);
        setLoading(false);
      });
    } else {
      console.error("Geolocation is not available.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue !== "") {
      const { lat, lon } = inputValue;
      fetchWeatherData(lat, lon);
    } else {
      const defaultLat = 0;
      const defaultLon = 0;
      fetchWeatherData(defaultLat, defaultLon);
    }

  }, [inputValue, apikey]);

  if (loading) {
    return (
      <div className='loading'>
        <Loading />
      </div>
    );
  }
  return (
    
    <section>
      <div className='search-container text-center'>
        <Search onSearchChange={handleSearchChange} />
      </div>
     
      <div className="weather flex evenly align-center">
      <button onClick={getCurrentLocation}><i class="fa-solid fa-location-arrow"></i></button>
        <div className="icon">
          <img src={getWeatherIcon(weatherData.weatherIconCode)} alt="Weather Icon" />
        </div>
        <div>
          <div className="weatherInfo flex flex-col gap">
            <p> Today</p>
            <h2><i class="fa-solid fa-location-dot"></i> {weatherData.location} , {weatherData.country}</h2>
            <p>Temperature: {weatherData.temperature}°C</p>
            <p>{weatherData.main} , {getPolution(weatherData.polution)} </p>
            <p>Wind Speed: {weatherData.windSpeed} m/s</p>
          </div>
          <Week  weatherData={[
              {
                dt_txt: weatherData.dt_txt_1,
                degree: weatherData.degree1,
                icon: weatherData.icon1
              },
              {
                dt_txt: weatherData.dt_txt_2,
                degree: weatherData.degree2,
                icon: weatherData.icon2
              },
              {
                dt_txt: weatherData.dt_txt_3,
                degree: weatherData.degree3,
                icon: weatherData.icon3
              },
              {
                dt_txt: weatherData.dt_txt_4,
                degree: weatherData.degree4,
                icon: weatherData.icon4
              }
            ]}
            getWeatherIcon={getWeatherIcon}
            />
        </div>
      </div>
      
    </section>
  );
};

export default Weather;