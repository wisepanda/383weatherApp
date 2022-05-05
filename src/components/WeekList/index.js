import './weeklist.css';
import Card from '../Card/index.js';
export default function WeekList({ weekly }) {
  console.log(weekly);
  return (
    <div className="weeklist">
      <h2> Weekly weather</h2>
      {weekly.map((weekday) => {
        return (
          <Card
            day={weekday.dt}
            temperatureMax={weekday.temp.max}
            temperatureMin={weekday.temp.min}
          />
        );
      })}
    </div>
  );
}
