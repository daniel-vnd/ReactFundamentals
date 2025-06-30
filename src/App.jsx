
import Hero from './component/Hero';

// 28. Passing function to child component

const App = () => {
	const BtnClick = () => {
		alert("Hello Ariyan!");
	}

	return (
		<div>
			<Hero item={BtnClick} />
		</div>
	);
};

export default App;