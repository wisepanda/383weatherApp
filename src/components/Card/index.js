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

  const getWeekDay = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const time = dateObject.toString().split(' ');
    return `${time.slice(0, 1)} ${time.slice(2, 3)}`;
  };

  const getTime = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const time = dateObject.toString().split(' ');
    return time[4]?.split('').slice(0, 5);
  };

  return (
    <>
      <div onClick={expandCard} className={`card ${weatherDescription}`}>
        <div className="content-wrapper">
          <div className="date-wrapper">
            <h1>{getWeekDay(dt)}</h1>
            <div className="sets-wrapper">
              <h4>{`Max: ${temp.max.toFixed(0)}°C`}</h4>
              <h4 className="temp-min">{`Min: ${temp.min.toFixed(0)}°C`}</h4>
            </div>
            <div className="sets-wrapper">
              <div className="sunrise-wrapper">
                <div>Sunrise </div>
                <div>{getTime(sunrise)}</div>
              </div>
              <div className="sunrise-wrapper">
                <div>Sunset</div>
                <div>{getTime(sunset)}</div>
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
          <div className={`expandedCard`}>
            <h3>{`${description}`}</h3>
            <p>{`humidity:${humidity}%`}</p>
            <p>{`Feels like:${feelslike} °C`}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
