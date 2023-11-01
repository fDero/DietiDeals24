import { Component } from 'react';
import Input from './Input';

export default class FormLogin extends Component {
	render() {
		return (
			<form action={this.props.addr} method="post" id={this.props.id}>
				<Input name="email" type="email" />
				<Input name="password" type="password" />
				<button type="submit">Submit</button>
				<button type="reset">Reset</button>
			</form>
		);
	}
}
