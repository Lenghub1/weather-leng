import React, {useState, useEffect } from 'react';
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
  const getPolution = (polution) => {
    if ( polution === 1){
      return 'Good'
    }
    else if(polution === 2){
      return 'Fair'
    }
    else if(polution === 3){
      return 'Moderate'
    }
    else if(polution === 4){
      return 'Poor'
    }
    else if(polution === 5)
    return 'Very Poor'
  }
  const getWeekday = (date) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
  };
  useEffect(() => {
    const fetchWeatherData = async () => {
      let currentweather = '';
      let polutionweather = '';
      let forecest = '';
      if (inputValue !== "") {
        currentweather = `${url}/weather?lat=${inputValue.lat}&lon=${inputValue.lon}&units=Metric&appid=${apikey}`;
        polutionweather = `${url}/air_pollution?lat=${inputValue.lat}&lon=${inputValue.lon}&units=Metric&appid=${apikey}`;
        forecest = `${url}/forecast?lat=${inputValue.lat}&lon=${inputValue.lon}&units=Metric&appid=${apikey}`;
      } else {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            currentweather = `${url}/weather?lat=${lat}&lon=${lon}&units=Metric&appid=${apikey}`;
            polutionweather = `${url}/air_pollution?lat=${lat}&lon=${lon}&units=Metric&appid=${apikey}`;
            forecest = `${url}/forecast?lat=${lat}&lon=${lon}&units=Metric&appid=${apikey}`;
            await fetchWeather(currentweather , polutionweather , forecest);
            setLoading(false);
          }, function (error) {
            console.error("Error getting geolocation:", error);
            setLoading(false);
          });
        } else {
          console.error("Geolocation is not available.");
          setLoading(false);
        }
      }
  
      if (currentweather && polutionweather && forecest) {
        await fetchWeather(currentweather, polutionweather , forecest);
      }
    };
  
    async function fetchWeather(currentweather , polutionweather , forecast) {
      try {
        const response = await fetch(currentweather);
        const data_current = await response.json();
        const response_polution = await fetch(polutionweather)
        const data_polution = await response_polution.json()
        const response_forecest = await fetch(forecast)
        const data_forecest = await response_forecest.json()
        const stepdata_forecest = [];
        for (let i = 0; i < data_forecest.list.length; i += 8) {
          stepdata_forecest.push(data_forecest.list[i]);
        }
        setWeatherData({
          country: data_current.sys.country,
          windSpeed: data_current.wind.speed ,
          location: data_current.name,
          temperature: Math.floor(data_current.main.temp),
          main: data_current.weather[0].description,
          weatherIconCode: data_current.weather[0].icon,
          polution: data_polution.list[0].main.aqi,
          dt_txt_1: getWeekday(new Date(stepdata_forecest[1].dt_txt)),
          degree1: Math.floor(stepdata_forecest[1].main.temp),
          dt_txt_2: getWeekday(new Date(stepdata_forecest[2].dt_txt)),
          degree2: Math.floor(stepdata_forecest[2].main.temp),
          dt_txt_3: getWeekday(new Date(stepdata_forecest[3].dt_txt)),
          degree3: Math.floor(stepdata_forecest[3].main.temp),
          dt_txt_4: getWeekday(new Date(stepdata_forecest[4].dt_txt)),
          degree4: Math.floor(stepdata_forecest[4].main.temp),
          icon1: stepdata_forecest[1].weather[0].icon,
          icon2: stepdata_forecest[2].weather[0].icon,
          icon3: stepdata_forecest[3].weather[0].icon,
          icon4: stepdata_forecest[4].weather[0].icon,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  
    fetchWeatherData();
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