
import { React, Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

import { ContentScreen } from './screens/ContentScreen'
import { LoginScreen } from './screens/LoginScreen'
import { RegisterScreen } from './screens/RegisterScreen'


export default class App extends Component {

	render = () => (
		<Router>
			<Routes>
				<Route element={<LoginScreen/>}    path="login"    />
				<Route element={<RegisterScreen/>} path="register" />
				<Route element={<ContentScreen/>}  path="content"  />
				<Route element={<LoginScreen/>}    path="*"        />
			</Routes>
		</Router>
	);
}