import './searchbar.css';
import { useState } from 'react';

const SearchBar = ({ fetchData }) => {
  const [userInput, setUserInput] = useState('');

  function handleInput(e) {
    setUserInput(e.target.value);
  }

  function handleClick() {
    fetchData(userInput);
  }

  return (
    <div className="searchbar">
      <input type="text" placeholder="Enter city name" onChange={handleInput} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
