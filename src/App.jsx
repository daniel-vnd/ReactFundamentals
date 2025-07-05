import { useRef } from 'react';

// 38. [Hook] useRef - working with input elements

const App = () => {


	let firstName = useRef();
	let lastName = useRef();
	
	const change = () => {
		let fName = firstName.value
		let lName = lastName.value
		
		alert(fName + " " + lName);
	}

	return (
		<div>
			<input ref={(a) => firstName=a} placeholder='First Name' /> <br />
			<input ref={(a) => lastName=a} placeholder='Last Name' /> <br />
			
			<button onClick={change}>Click</button>
		</div>
	)
};

export default App;