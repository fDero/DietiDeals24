import { Component } from 'react';
import Form from './Form';

export default class FormRegistrazione extends Component {
	render() {
		return (
			<Form
				inputs={[
					{ name: 'name', type: 'text' },
					{ name: 'surname', type: 'text' },
					{ name: 'birthday', type: 'date' },
					{ name: 'country', type: 'text' },
					{ name: 'email', type: 'email' },
					{ name: 'password', type: 'password' },
					{ name: 'phone', type: 'tel' },
				]}
				handleSubmit={this.props.handleSubmit}
			/>
		);
	}
}
