import { AsyncPaginate } from "react-select-async-paginate";
import './search.css';

const Search = () => {
  return (
    <div>
      <AsyncPaginate
        className="search-input"
        placeholder="Search for city"
      />
    </div>
  );
};

export default Search;
