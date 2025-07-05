import { useEffect } from 'react';

// 47. [Hook] useEffect - understanding arguments and uses

const App = () => {
	// executes twice and on each modificatio of the state
	// when we use "React.StrictMode" the component will be loaded 2 times
	useEffect(() => {
		console.log("Hi Ariyan");
	});

	// executes only when the components loads and when the value that is between the brackets "[]" will change
	useEffect(() => {
		console.log("Hi Ariyan");
	}, [4]);
	
	return (
		<div>
			
		</div>
	)

};

export default App;