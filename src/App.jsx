import { useEffect, useState } from 'react';

// 47. [Hook] useEffect - calling api using async await

const App = () => {
	let [data, setData] = useState({});

	// executes only when the components loads and when the value that is between the brackets "[]" will change
	useEffect(() => {
		// here we will use the imediate invoked function
		(async () => {
			let response = await fetch('https://dummyjson.com/products/1');
			let json = await response.json();
			
			setData(json);
		})();

	}, []);
	
	return (
		<div>
			{JSON.stringify(data)}
		</div>
	)
};

export default App;