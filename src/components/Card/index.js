import './Card.css';

const Card = ({location, temperature, icon}) => {
  return <div className="card">
<h1>{location}</h1>
<p>{temperature}</p>
<img src={icon} alt="weather icon"/>
  </div>;
};

export default Card;
