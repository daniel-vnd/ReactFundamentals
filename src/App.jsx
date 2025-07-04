import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

// 33. Browser Router VS HashRouter

const App = () => {

	return (
		<div>
			<HashRouter>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/about" element={<AboutPage/>}/>
					<Route path="/contact" element={<ContactPage/>}/>
					<Route path="*" element={<NotFound/>}/>
				</Routes>			
			</HashRouter>
		</div>
	);
};

export default App;