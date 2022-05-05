import './App.css';
import { useEffect, useState } from 'react';
//Components
import Card from '../Card';
import SearchBar from '../SearchBar';
import WeekList from '../WeekList';

function App() {
  const [current, setCurrent] = useState('');
  const [weekly, setWeekly] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const cityCoordinates = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=f9c0898eeee0f76ed20293b748929eca`
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
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <SearchBar setLocation={setLocation} />
      {/* <Card />
			<WeekList /> */}
    </div>
  );
}

export default App;
