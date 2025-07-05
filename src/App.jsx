import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

// 36. [Hook] useRef InnerText InnerHtml

const App = () => {

	let myHeadLine = document.getElementById('myHeadLine');

	return (
		<div>
			<h1 id="myHeadLine"></h1>
		</div>
	);
};

export default App;