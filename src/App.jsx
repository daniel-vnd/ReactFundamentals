
import Hero from './component/Hero';

// 29. Managing Click Event

const App = () => {
	const BtnClick = () => {
		alert("Hello Ariyan!");
	}

	return (
		<div>
			<button onClick={() => {
				alert('hi ariyan')
			}}>Submit</button>
		</div>
	);
};

export default App;