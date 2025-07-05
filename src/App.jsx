import { useState } from 'react';

// 42. [Hook] useState - working with imutable object 

const App = () => {

	const [myObj, setMyObj] = useState({
		key1: "Ariyan 1",
		key2: "Ariyan 2",
		key3: "Ariyan 3",
	});
	
	const change = () => {
		// Update all the object values
		setMyObj({
			key1: "Kazi Ariyan 1",
			key2: "Kazi Ariyan 2",
			key3: "Kazi Ariyan 3",
		
		});
		
		// Update a specific key of the object
		setMyObj(previousObj => ({
			 ...previousObj,
			 key1: "hi how are you"
		}));
		
		// Update multiple keys of the object
		setMyObj(previousObj => ({
			 ...previousObj,
			 key1: "hi how are you",
			 key2: "what is your name"
		}));
	}
	
	return (
		<div>
			<h1>Number: {myObj.key1}</h1>
			<h1>{myObj.key2}</h1>
			<h1>{myObj.key3}</h1>
			<button onClick={change}>Change</button>
		</div>
	)
};

export default App;