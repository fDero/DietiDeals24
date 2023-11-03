
import React from 'react'
import { View } from 'react-native'
import { Component } from 'react'

import FormRegistrazione from '../components/FormRegistrazione'
import TeleportButton from '../components/TeleportButton';


export class RegisterScreen extends Component {
	
	render = () => (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FormRegistrazione/>
            <TeleportButton title="Login" destination="/Login" />
            <TeleportButton title="Content" destination="/Content" />
        </View>
	)
}