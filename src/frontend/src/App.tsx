
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContentPage from './pages/ContentPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegistrationPage from './pages/RegistrationPage.tsx';
import PageNotFound from './pages/PageNotFound.tsx';

import './style.css'

export default class App extends React.Component {
	render = () => (
		<Router>
			<Routes>
				<Route element={<LoginPage />} path="/login" />
				<Route element={<RegistrationPage />} path="/register" />
				<Route element={<ContentPage />} path="/content" />
				<Route element={<PageNotFound />} path="*" />
			</Routes>
		</Router>
	);
}