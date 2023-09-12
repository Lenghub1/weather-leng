import './week.css';

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
            <p>{day.degree}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week;