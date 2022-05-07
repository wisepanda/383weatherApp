import './weeklist.css';
import Card from '../Card/index.js';
export default function WeekList({ weekly }) {
  return (
    <div className="weeklist">
      <h2> Weekly weather</h2>
      {weekly.map((weekday, index) => {
        return <Card id={index} weekday={weekday} />;
      })}
    </div>
  );
}
