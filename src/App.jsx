import { useRef } from 'react';

// 37. [Hook] useRef - working with attributes

const App = () => {

	let myImg = useRef();

	const change = () => {
		myImg.current.src = 'https://placehold.co/600x400/000000/FFF';
		myImg.current.setAttribute('height', '200px');
		myImg.current.setAttribute('width', '300px');
	}

	return (
		<div>
			<img ref={myImg} src='https://placehold.co/600x400'></img>
			<button onClick={change}>Click</button>
		</div>
	);
};

export default App;