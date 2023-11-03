
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ContentPage from './pages/ContentPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import PageNotFound from './pages/PageNotFound'


export default class App extends React.Component {

  	render = () => (
		<Router>
      		<Routes>
		  		<Route element={<LoginPage/>}        path="/login"/>
		  		<Route element={<RegistrationPage/>} path="/register"/>
		  		<Route element={<ContentPage/>}      path="/content"/>
        		<Route element={<PageNotFound/>}     path="*"/>
      		</Routes>
    	</Router>
  	)
}
