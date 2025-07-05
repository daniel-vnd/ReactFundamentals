import { useEffect, useState } from 'react';

// 47. [Hook] useEffect - calling api using promises

const App = () => {
	let [data, setData] = useState({});

	// executes only when the components loads and when the value that is between the brackets "[]" will change
	useEffect(() => {
		fetch('https://dummyjson.com/products/1')
			.then(res => res.json())
			.then(json => setData(json));
	}, []);
	
	return (
		<div>
			{JSON.stringify(data)}
		</div>
	)
};

export default App;