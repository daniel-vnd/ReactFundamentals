import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './component/Hero';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

// 30. Managing Form Submit

const App = () => {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route url="/" element={<HomePage />}/>
					<Route url="/about" element={<AboutPage />}/>
					<Route url="/contact" element={<ContactPagePage />}/>
					<Route url="/*" element={<NotFound />}/>
				</Routes>			
			</BrowserRouter>
		</div>
	);
};

export default App;