
import React from 'react'
import { View } from 'react-native'
import { Component } from 'react'

import FormLogin from '../components/FormLogin'
import TeleportButton from '../components/TeleportButton';


export class LoginScreen extends Component {
	
	render = () => (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<FormLogin/>
            <TeleportButton title="Register" destination="/Register" />
            <TeleportButton title="Content" destination="/Content" />
		</View>
	)
}