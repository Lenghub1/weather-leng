import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import './search.css';
import cityList from '../city_data.json'; 

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    
    if (inputValue.length < 3) {
      return Promise.resolve({ options: [] }); 
    }

    const filteredCities = cityList.filter((city) =>
      city.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    const options = filteredCities.map((city) => ({
      value: `${city.coord.lat} ${city.coord.lon}`,
      label: `${city.name}, ${city.country_name}`,
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