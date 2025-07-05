import { useRef } from 'react';

// 38. [Hook] useRef - working with input elements

const App = () => {


	let firstName = useRef();
	let lastName = useRef();
	
	const change = () => {
		let fName = firstName.current.value
		let lName = lastName.current.value
		
		alert(fName + " " + lName);
	}

	return (
		<div>
			<input ref={firstName} placeholder='First Name' /> <br />
			<input ref={lastName} placeholder='Last Name' /> <br />
			
			<button onClick={change}>Click</button>
		</div>
	)
};

export default App;