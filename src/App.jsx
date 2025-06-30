
import Hero from './component/Hero';

// 29. Managing Click Event

const App = () => {
	function Demo() {
		alert('hi ariyan')
	}

	return (
		<div>
			<button onClick={Demo}>Submit</button>
		</div>
	);

};

export default App;