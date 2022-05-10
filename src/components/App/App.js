import './App.css';
import { useState } from 'react';
//Components
import CurrentCard from '../CurrentCard';
import SearchBar from '../SearchBar';
import WeekList from '../WeekList';

function App() {
  const [current, setCurrent] = useState('');
  const [weekly, setWeekly] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [cityName, setCityName] = useState(``);

  const fetchData = async (city) => {
    try {
      const cityCoordinates = await fetch(
        `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      const coordinatesData = await cityCoordinates.json();
      const lon = coordinatesData.coord.lon;
      const lat = coordinatesData.coord.lat;
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`
      );
      const Data = await res.json();
      /* Cleaning the state of fetchError. */
      setFetchError('');
      setCurrent(Data.current);
      setCityName(city);
      setWeekly(Data.daily.filter((data, index) => index !== 0));
    } catch (error) {
      setFetchError(`City doesn't exist`);
    }
  };

  return (
    <div className="App">
      {fetchError && <h3>{fetchError}</h3>}
      <SearchBar fetchData={fetchData} />
      {current && <CurrentCard currentWeather={current} cityName={cityName} />}
      <WeekList weekly={weekly} />
    </div>
  );
}

export default App;
