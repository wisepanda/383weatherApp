//Libraries
import { useState } from 'react';
import { getTime } from '../../libs/dates';
//Styles
import './CurrentCard.css';

const CurrentCard = ({ currentWeather, cityName }) => {
  const [dropdown, setdropdown] = useState(false);
  const { sunrise, sunset, temp, weather, humidity, feels_like } =
    currentWeather;
  const weatherDescription = weather[0].main;
  const expandCard = () => {
    setdropdown(!dropdown);
  };

  return (
    <>
      <div onClick={expandCard} className={`cardCurrent ${weatherDescription}`}>
        <div className="city-temp-wrapper">
          <h1>{cityName}</h1>
          <h1>{temp.toFixed(0)}°C</h1>
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
        <div className="icon-wrapper-current">
          <img
            src={`icons/${weatherDescription}.svg`}
            alt={weather[0].main}
            width="100px"
          />
          <h4>{weather[0].main}</h4>
        </div>
      </div>
      {dropdown && (
        <div>
          <h3>{`${weatherDescription}`}</h3>
          <p>{`humidity:${humidity}%`}</p>
          <p>{`Feels like:${feels_like} °C`}</p>
        </div>
      )}
    </>
  );
};

export default CurrentCard;
