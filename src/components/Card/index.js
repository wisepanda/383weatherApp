import { useState } from 'react';
import './Card.css';

const Card = ({
  cityName,
  temperature,
  day,
  temperatureMax,
  temperatureMin,
  id,
  humidity,
  feelslike,
  description,
  currentSunset,
  currentSunrise,
}) => {
  const [dropdown, setdropdown] = useState(false);

  const expandCard = () => {
    setdropdown(!dropdown);
  };

  const getUnixTime = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const time = dateObject.toString().split(' ');
    return time.slice(0, 3).join(' ');
  };

  const getUnixHour = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const time = dateObject.toString().split(' ');
    const removeSeconds = time[4]?.split('').slice(0, 5).join('');
    return removeSeconds;
  };

  return (
    <>
      <div onClick={expandCard} className="card" id={id}>
        {day && getUnixTime(day)}
        <div className="city-temp-wrapper">
          {cityName && <h1>{cityName}</h1>}
          {temperature && <h1>{temperature.toFixed(0)} °C</h1>}
          <div className="sets-wrapper">
            <div className="sunrise-wrapper">
              <div>Sunrise </div>
              <div>{getUnixHour(currentSunrise)}</div>
            </div>
            <div className="sunrise-wrapper">
              <div>Sunset</div>
              <div>{getUnixHour(currentSunset)}</div>
            </div>
          </div>
        </div>
        <div className="icon">ICONO</div>

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
