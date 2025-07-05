import { useState } from 'react';

// 41. [Hook] useState - understand inside 

const App = () => {
	const [number, setNumber] = useState(1);
	
	return (
		<div>
			<h1>Number: {number}</h1>
			<button onClick={() => setNumber(number + 1)}>Click</button>
		</div>
	)
};

export default App;