//Components
import Card from '../Card/index.js';
//Styles
import './weeklist.css';

const WeekList = ({ weekly }) => {
  return (
    <div className="weeklist">
      <h2> Weekly weather</h2>
      {weekly.map((weekday, index) => {
        return <Card key={index} weekday={weekday} />;
      })}
    </div>
  );
};

export default WeekList;
