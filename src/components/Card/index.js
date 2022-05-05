import './Card.css';

const Card = ({cityName, temperature, icon}) => {
  return <div className="card">
<h1>{cityName}</h1>
<p>{temperature}</p>
<img src={icon} alt="weather icon"/>
  </div>;
};

export default Card;
