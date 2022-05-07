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
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4b6e93d558237270549de87a4606266d`
      );
      const coordinatesData = await cityCoordinates.json();
      const lon = coordinatesData.coord.lon;
      const lat = coordinatesData.coord.lat;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=4b6e93d558237270549de87a4606266d`
      );
      const Data = await res.json();
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
