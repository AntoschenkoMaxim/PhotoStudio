import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from './components';

import Home from './container/Home';
import Landing from './container/Landing';

const App = () => {
	return (
		<Routes>
			<Route path='landing' element={<Landing />} />
			<Route path='/login' element={<Login />} />
			<Route path='/*' element={<Home />} />
		</Routes>
	)
}

export default App