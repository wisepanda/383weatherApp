import './weeklist.css';
import { useState } from 'react';
import Card from '../Card/index.js';
export default function WeekList({ weekly }) {
  const [dropdown, setdropdown] = useState(false);

  const expandCard = () => {
    setdropdown(!dropdown);
  };

  return (
    <div className="weeklist">
      <h2> Weekly weather</h2>
      {weekly.map((weekday, index) => {
        return (
          <Card
            id={index}
            expandCard={expandCard}
            day={weekday.dt}
            temperatureMax={weekday.temp.max}
            temperatureMin={weekday.temp.min}
            dropdown={dropdown}
            humidity={weekday.humidity}
            feelslike={weekday.feels_like.day}
            description={weekday.weather[0].description}
          />
        );
      })}
    </div>
  );
}
