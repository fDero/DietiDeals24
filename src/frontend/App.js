import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Component } from 'react';
import FormRegistrazione from './src/FormRegistrazione';
import FormLogin from './src/FormLogin';


function request(endpoint, method, data){
	let request = {
		method: method,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	}
	fetch('http://localhost:8080/' + endpoint, request)
	.then(response => response.text())
  	.then(data => { console.log(data); })
  	.catch(error => { console.error('Si è verificato un errore:', error) });
}



export default class App extends Component {
	
	constructor(props){
		super(props);
		this.state = { };
	}
	
	render = () => (
		<View style={this.styles.container}>
			<FormRegistrazione id="form" addr={this.addr} />
			<button onClick={this.button_clicked}> Registrati </button>
			<StatusBar style="auto" />
		</View>
	);

	button_clicked = () => {
		console.log("button clicked")
		request('register/initialize_registration','POST',{
			name: "Nome",
    		surname: "Cognome",
    		birthday: "1990-01-01",
    		country: "IT", 
    		password: "Password123?",
    		email: "francescodero@outlook.net",
    		phone: "123456789",
		})
	}

	styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
		},
	});
}
