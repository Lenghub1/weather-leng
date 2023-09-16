# Weather App

A simple weather website build with React to help you check the weather condition for your location and different locations.

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

- `Weather Current location`
- `Search dropdown`
- `Weather forecest`(display next 4days of weather data)
- `Icon by condition`(display different icon by condition of weather )
- `Background by condition`
- `AnimateNumber display`
- `Responsive Design`( desktop and mobile devices)

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

2. change API key:

![Apikey](/src/assets/apikeySs.png)

change API key to your API key by this website [GetApi](https://home.openweathermap.org/api_keys)

## Usage

1. Run the app

```bash
npm run dev
```
after that, it will show
```
Local:   http://localhost:5175/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
2. Open your web browser and go to `http://localhost:5175/` to access the Weather App

3. By default, the website displays weather information for the location with latitude 0 and longitude 0. If you want to see the weather for your current location, simply click on the compass button and allow the website to access your location. If you do not allow access, the website will continue to display the default location. To view weather information for a different location, click on the search bar and search the name of the city you are interested in. Once you select the city, the website will display weather information for that location.

## Technologies
- React
- CSS (Cascading Style Sheets)
- [OpenWeatherAPI](https://openweathermap.org/api) : [ForecestAPI](https://openweathermap.org/forecast5) , [CurrentAPI](https://openweathermap.org/current) , [PolutionAPI](https://openweathermap.org/api/air-pollution)
- [Vercel(deploy)](https://vercel.com/new)
- [AsyncPaginate (dropdown search)](https://www.npmjs.com/package/react-select-async-paginate)
- Zustand
- Meteocons (icons) [Link](https://bas.dev/work/meteocons)
## Convention
Convention guide can be accessed [here](/document/convention-guide.md).

## Document

- [UI Prototype](https://www.figma.com/file/n2YhbGxZbWdDZsWz0N0YIR/WeatherApp-TourLeng?type=design&node-id=0%3A1&mode=design&t=HEWIbvS7cMvWGwKO-1)
- [Flow Guide](https://zpl.io/p1D7eMJ)
## noted :
- Plane flying I got it from internet (sorry I forgot the link ) ~~
- About background I use Photoleap to make ~~ (Photoleap is a photo editing app that uses AI to offer advanced features such as creating new worlds with AI scenes, transforming photos into artwork and generating digital art.)
- AnimateNumber inspired by moonlight ~~
- About the city_data.json file, you can get the original from [here](http://bulk.openweathermap.org/sample/) and my city_data.json I got it from kimsang [here](https://github.com/anb-hq/CnD_Mok_Kimsang_Weather/tree/main/src/data). #Thank you ~~
