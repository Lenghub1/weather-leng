import { create } from 'zustand';

const useWeatherStore = create((set) => ({
  apikey: "b55ebdc22b904e591303fa9ae71ebea6",
  url:"https://api.openweathermap.org/data/2.5/",
    weatherData: {
    windSpeed: "",
    temperature: "",
    location: "",
    main: "",
    weatherIconCode: "",
    polution:"",
    country:""
  },
  inputValue: "",
  setInputValue: (searchValue) => set({ inputValue: searchValue }),
  setWeatherData: (data) => set({ weatherData: data }),
}));

export default useWeatherStore;
