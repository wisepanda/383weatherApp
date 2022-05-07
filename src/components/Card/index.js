import { useState } from 'react';
import './Card.css';

const Card = ({
  weekday,
  id,
  temperatureMax,
  temperatureMin,
  humidity,
  feelslike,
  description,
}) => {
  const [dropdown, setdropdown] = useState(false);
  const { dt, sunrise, sunset, weather, temp } = weekday;
  const weatherDescription = weather[0].main;
  const expandCard = () => {
    setdropdown(!dropdown);
  };

  const getUnixTime = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const time = dateObject.toString().split(' ');
    return `${time.slice(0, 1)} ${time.slice(2, 3)}`;
  };

  const getUnixHour = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const time = dateObject.toString().split(' ');
    const removeSeconds = time[4]?.split('').slice(0, 5);
    return removeSeconds;
  };

  return (
    <>
      <div onClick={expandCard} className={`card ${weatherDescription}`}>
        <div className="date-wrapper">
          <h1>{getUnixTime(dt)}</h1>
          <div className="sets-wrapper">
            <h4>{`Max: ${temp.max.toFixed(0)}°C`}</h4>
            <h4 className="temp-min">{`Min: ${temp.min.toFixed(0)}°C`}</h4>
          </div>
          <div className="sets-wrapper">
            <div className="sunrise-wrapper">
              <div>Sunrise </div>
              <div>{getUnixHour(sunrise)}</div>
            </div>
            <div className="sunrise-wrapper">
              <div>Sunset</div>
              <div>{getUnixHour(sunset)}</div>
            </div>
          </div>
        </div>

        <div className="city-temp-wrapper"></div>
        <div className="icon-wrapper">
          <img
            src={`icons/${weatherDescription}.svg`}
            alt={weatherDescription}
            width="60px"
          />
          <p>{weatherDescription}</p>
        </div>
        {temperatureMin && <p>Min: {temperatureMin.toFixed(0)} °C</p>}
        {temperatureMax && <p>Min: {temperatureMax.toFixed(0)} °C</p>}
      </div>
      {dropdown && (
        <div>
          <h3>{`${description}`}</h3>
          <p>{`humidity:${humidity}%`}</p>
          <p>{`Feels like:${feelslike} °C`}</p>
        </div>
      )}
    </>
  );
};

export default Card;
