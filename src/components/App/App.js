import './App.css';
import { useEffect, useState } from 'react';
//Components
// import Card from '../Card';
import SearchBar from '../SearchBar';
// import WeekList from '../WeekList';

function App() {
  const [current, setCurrent] = useState('');
  const [weekly, setWeekly] = useState('');
  const [fetchError, setFetchError] = useState('');

  const fetchData = async (city) => {
    try {
      const cityCoordinates = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f9c0898eeee0f76ed20293b748929eca`
      );
      const coordinatesData = await cityCoordinates.json();
      const lon = coordinatesData.coord.lon;
      const lat = coordinatesData.coord.lat;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=f9c0898eeee0f76ed20293b748929eca`
      );
      const Data = await res.json();
      setCurrent(Data.current);
      setWeekly(Data.daily);
    } catch (error) {
      setFetchError(`City doesn't exist`);
    }
  };

  return (
    <div className="App">
      {fetchError && <h3>{fetchError}</h3>}
      <SearchBar fetchData={fetchData} />
      {/* <Card />
			<WeekList /> */}
    </div>
  );
}

export default App;
