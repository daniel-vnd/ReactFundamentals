
import Hero from './component/Hero';

// 27. Passing object to child component

const App = () => {
	const ItemObj = {
		name: 'Kari Ariyan',
		age: 35,
		city: 'USA'
	};


	return (
		<div>
			<Hero item={ItemObj} />
		</div>
	);
};

export default App;