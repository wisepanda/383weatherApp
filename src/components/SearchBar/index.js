import "./searchbar.css";
import { useState } from "react";

const SearchBar = ({ setLocation, handleClick }) => {
	const [userInput, setUserInput] = useState("");

	function handleInput(e) {
		setUserInput(e.target.value);
		console.log(e.target.value);
	}

	return (
		<div className="searchbar">
			<input type="text" placeholder="Enter city name" onChange={handleInput} />
			<button onClick={(e) => handleClick(userInput)}>Search</button>
		</div>
	);
};

export default SearchBar;
