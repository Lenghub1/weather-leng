import './weather.css';
import Search from './Search';
import Week from './weekweather';
import clear from '../image/clear.svg'

const Weather = () => {
  return (
    <section>
      <div className='search-container text-center'>
        <Search />
      </div>
      <div className="weather flex evenly align-center">
        <div className="icon">
           <img src={clear} alt="clear" />
        </div>
        <div>
          <div className="weatherInfo flex flex-col gap">
            <p> Today</p>
            <h2><i class="fa-solid fa-location-dot"></i>Phnom penh , KH</h2>
            <p>Temperature: 28°C</p>
            <p>rain,  good</p>
            <p>Wind Speed: 3.08 m/s</p>
          </div>
          <Week />
        </div>
      </div>
      
    </section>
  );
};

export default Weather;