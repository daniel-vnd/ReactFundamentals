import { useRef } from 'react';

// 39. [Hook] useRef - working CSS 

const App = () => {
	let myHeadLine = useRef();
	
	const change = () => {
		myHeadLine.current.classList.remove('text-success');
		myHeadLine.current.classList.add('text-danger');
	}

	return (
		<div>
			<h1 className="text-success" ref={myHeadLine}>This is head Line</h1>
			
			<button onClick={change}>Click</button>
		</div>
	)

};

export default App;