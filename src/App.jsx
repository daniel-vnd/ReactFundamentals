import { useRef } from 'react';

// 36. [Hook] useRef InnerText InnerHtml

const App = () => {

	let myHeadLine = useRef();

	const change = () => {
		myHeadLine.current.innerHTML = '<ul><li>A</li><li>B</li></ul>'
	}

	return (
		<div>
			<h1 ref={myHeadLine}></h1>
			<button onClick={change}>Click</button>
		</div>
	);
};

export default App;