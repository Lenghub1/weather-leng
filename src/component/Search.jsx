import React, { useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import './search.css';
import useWeatherStore from "../data/weatherStore";
const Search = ({ onSearchChange }) => {
  const { setCityList,search,setSearch,cityList } = useWeatherStore();

  useEffect(() => {
    // Fetch data from My git URL api
    fetch("https://lenghub1.github.io/city_json/cityname_data.json")
      .then((response) => response.json())
      .then((data) => {
        setCityList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const loadOptions = (inputValue) => {
    if (inputValue.length < 3) {
      return Promise.resolve({ options: [] });
    }

    const filteredCities = cityList.filter((city) =>
      city.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    const options = filteredCities.map((city) => ({
      value: `${city.coord.lat} ${city.coord.lon}`,
      label: (
        <div>
          <div>{city.name}</div>
          <div className="citycountry">{city.country_name}</div>
        </div>
      ),
      lat: city.coord.lat,
      lon: city.coord.lon,
    }));

    return Promise.resolve({
      options,
      hasMore: false,
    });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div>
      <AsyncPaginate
        className="search-input"
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;