import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

// 34. Passing Parameter Via Navigation

const App = () => {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/about/:id/:name" element={<AboutPage/>}/>
					<Route path="/contact" element={<ContactPage/>}/>
					<Route path="*" element={<NotFound/>}/>
				</Routes>			
			</BrowserRouter>
		</div>
	);
};

export default App;