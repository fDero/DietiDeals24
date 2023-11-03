
import React from 'react'
import { View } from 'react-native'
import { Component } from 'react'

import TeleportButton from '../components/TeleportButton';


export class ContentScreen extends Component {

	render = () => (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<h2>CONTENT</h2>
			<TeleportButton title="Login" destination="/Login" />
            <TeleportButton title="Register" destination="/Register" />
		</View>
	)
}