//Libraries
import { useState } from 'react';
//Styles
import './searchbar.css';

const SearchBar = ({ fetchData, setFetchError }) => {
  const [userInput, setUserInput] = useState('');

  const handleInput = (e) => setUserInput(e.target.value);

  const handleClick = () => {
    !userInput
      ? setFetchError('The field cant be empty')
      : fetchData(userInput);
    setUserInput('');
  };

  return (
    <div className="searchbar">
      <input
        value={userInput}
        type="text"
        placeholder="Enter city name"
        onChange={handleInput}
      />
      <button onClick={() => handleClick()}>Search</button>
    </div>
  );
};

export default SearchBar;
