import "./weeklist.css";
import Card from "../Card/index.js";
export default function WeekList({ weekly }) {
	console.log(weekly);
	return (
		<div className="weeklist">
			Week list
			{weekly.map((weekday) => {
				return <Card day={weekday.dt} />;
			})}
		</div>
	);
}
