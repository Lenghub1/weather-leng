import './week.css';
import AnimatedNumber from './AnimatedNumber';
const Week = ({ weatherData, getWeatherIcon }) => {
  return (
    <div className="week flex text-center justify-center">
      <h2 className="upcoming">Upcoming</h2>
      <div className="day">
        {weatherData.map((day, index) => (
          <div className="monday" key={index}>
            <p>{day.dt_txt}</p>
            <div className="Icon">
              <img src={getWeatherIcon(day.icon)} alt="Weather Icon" />
            </div>
            <p><AnimatedNumber value={day.degree} duration={1000} /></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week;