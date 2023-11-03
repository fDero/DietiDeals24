import { Component } from 'react';

import Form from './Form';

export default class FormLogin extends Component {
	render() {
		return (
			<Form
				inputs={[
					{ name: 'email', type: 'email' },
					{ name: 'password', type: 'password' },
				]}
				handleSubmit={this.props.handleSubmit}
			/>
		);
	}
}
