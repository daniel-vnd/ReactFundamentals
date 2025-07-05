import { useState } from 'react';

// 41. [Hook] useState - understand inside 

const App = () => {
	const [number, setNumber] = useState(1);
	
	const changeNumber = () => {
		setNumber(number + 1);
	}
	
	return (
		<div>
			<h1>Number: {number}</h1>
			<button onClick={changeNumber}>Click</button>
		</div>
	)
};

export default App;