import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

// 32. Link And NavLink For Router

const App = () => {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/about" element={<AboutPage/>}/>
					<Route path="/contact" element={<ContactPage/>}/>
					<Route path="*" element={<NotFound/>}/>
				</Routes>			
			</BrowserRouter>
		</div>
	);
};

export default App;