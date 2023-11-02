import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Component } from 'react';
import FormRegistrazione from './components/FormRegistrazione';
import FormLogin from './components/FormLogin';

function request(endpoint, method, data) {
	let request = {
		method: method,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	};
	fetch('http://localhost:8080/' + endpoint, request)
		.then(response => response.text())
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.error('Si è verificato un errore:', error);
		});
}

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: (
				<FormRegistrazione
					id="form"
					addr={this.addr}
					handleSubmit={this.handleFormSubmit}
				/>
			),
		};
	}

	render = () => (
		<View style={this.styles.container}>
			{this.state.form}
			<button onClick={this.setForm.bind(this)}> Registrati </button>
			<StatusBar style="auto" />
		</View>
	);

	setForm() {
		this.setState({ form: <FormLogin id="form" addr={this.addr} /> });
	}

	handleFormSubmit(submittedData) {
		request('register/initialize_registration', 'POST', submittedData);
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
