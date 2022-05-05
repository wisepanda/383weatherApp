import "./searchbar.css";

const SearchBar = () => {
	return (
		<div className="searchbar">
			<input type="text" placeholder="Enter city name" />
			<button>Search</button>
		</div>
	);
};

export default SearchBar;
