import './Card.css';

const Card = ({
  cityName,
  temperature,
  day,
  temperatureMax,
  temperatureMin,
  expandCard,
  dropdown,
  id,
  humidity,
  feelslike,
  description,
}) => {
  const getUnixTime = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const time = dateObject.toString().split(' ');
    return `${time[0]} ${time[1]} ${time[2]}`;
  };

  return (
    <>
      <div onClick={expandCard} className="card" id={id}>
        <p>{day && getUnixTime(day)}</p>
        {cityName && <h1>{cityName}</h1>}
        {temperature && <h1>{temperature} °C</h1>}
        {temperatureMin && <p>Min: {temperatureMin} °C</p>}
        {temperatureMax && <p>Min: {temperatureMax} °C</p>}

        {/* <img src={icon} alt="weather icon" /> */}
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
