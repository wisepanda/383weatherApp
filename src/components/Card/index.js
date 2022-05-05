import './Card.css';

const Card = ({
  cityName,
  temperature,
  day,
  temperatureMax,
  temperatureMin,
}) => {
  const getUnixTime = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const time = dateObject.toString().split(' ');
    return `${time[0]} ${time[1]} ${time[2]}`;
  };

  return (
    <div className="card">
      <p>{day && getUnixTime(day)}</p>
      {cityName && <h1>{cityName}</h1>}
      {temperature && <h1>{temperature} °C</h1>}
      <p>{temperatureMin}</p>
      <p> {temperatureMax}</p>

      {/* <img src={icon} alt="weather icon" /> */}
    </div>
  );
};

export default Card;
