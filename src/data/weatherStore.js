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
    country:"",
    dt_txt_1: "",
    dt_txt_2: "",
    dt_txt_3: "",
    dt_txt_4: "",
    degree1: "",
    degree2: "",
    degree3: "",
    degree4: "",
    icon1:"",
    icon2:"",
    icon3:"",
    icon4:"",
  },
  inputValue: "",
  loading: true, 
  search: null,
  cityList: [],
  displayValue: 0,
  
  setInputValue: (searchValue) => set({ inputValue: searchValue }),
  setWeatherData: (data) => set({ weatherData: data }),
  setSearch: (searchData) => set({ search: searchData }),
  setCityList: (cities) => set({ cityList: cities }),
  setLoading: (isLoading) => set({ loading: isLoading }),
}));

export default useWeatherStore;
