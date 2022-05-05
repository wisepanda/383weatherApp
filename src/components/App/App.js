import "./App.css";
//Components
import Card from "../Card";
import SearchBar from "../SearchBar";
import WeekList from "../WeekList";

function App() {
	return (
		<div className="App">
			<SearchBar />
			<Card />
			<WeekList />
		</div>
	);
}

export default App;
