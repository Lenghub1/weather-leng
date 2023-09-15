# Weather App

A simple weather website build with React to help you check the weather condition for different locations.

## Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Technologies](#technologies)
- [Usage](#usage)
- [Document](#document)
- [Convention Guide](#convention)

## Demo

You can checkout a live demo if the Weather App here: [Demo Link](https://weather-tourleng.vercel.app/)

## Features

- `Weather Current location`: Get the current location from user by click on compass button 
and display user location weather information that have `location of city , temperature , condition , polution and wind speed`.
-  `Search dropdown`: search for weather data by enter a city name and it display dropdown the city name and country name `example` : enter `seoul` the dropdown will display `Seoul,Korea,Republic of` and when click on city name the screen will change data from current location into data weather of city that you entered.
- `Weather forecest`:  display next 4days of weather data
- `Icon by condition`: display different icon by condition of weather (if weather rain icon change to rain icon) 
- `Background by condition`
- `AnimateNumber display`
- `Responsive Design`: The website is designed to work on both desktop and mobile devices.

## Installation 

To run this project locally , follow these steps:

1. Clone the reponsitory to your local machine:

``` bash
git clone https://github.com/Lenghub1/weather1.0.git

cd weather1.0

npm i

npm install react-select-async-paginate

npm install zustand
```

2. change apikey:

![Apikey](/src/assets/apikeySs.png)

change apikey to your apikey by this website [GetApi](https://home.openweathermap.org/api_keys)

## Usage

1. Run the app

```bash
npm run dev
```
after that it will show
```
Local:   http://localhost:5175/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
2. Open your web brower and go to `http://localhost:5175/` to access the Weather App

3. if website want your location if you want to see your current location just click allow if not click not , after you click allow the website will display the current weather data in your current location . if you want to get another city data just click search and enter city that you want to see.

## Technologies
- React
- CSS (Cascading Style Sheets)
- [OpenWeatherAPI](https://openweathermap.org/api) : [ForecestAPI](https://openweathermap.org/forecast5) , [CurrentAPI](https://openweathermap.org/current) , [PolutionAPI](https://openweathermap.org/api/air-pollution)
- [Vercel(desploy)](https://vercel.com/new)
- [AsyncPaginate (dropdown search)](https://www.npmjs.com/package/react-select-async-paginate)
- Zustand
- Meteocons (icons) [Link](https://bas.dev/work/meteocons)
## Convention
Convention guide can be accessed [here](/document/convention-guide.md).

## Document

- [UI Prototype](https://www.figma.com/file/n2YhbGxZbWdDZsWz0N0YIR/WeatherApp-TourLeng?type=design&node-id=0%3A1&mode=design&t=HEWIbvS7cMvWGwKO-1)
- [Flow Guide]()
## noted :
About the city_data.json file you can get original from [here](http://bulk.openweathermap.org/sample/) and my city_data.json i got it from kimsang [here](https://github.com/anb-hq/CnD_Mok_Kimsang_Weather/tree/main/src/data). #Thank you ~~
