import { Component } from 'react';
import Input from './Input';

export default class FormRegistrazione extends Component {
	render() {
		return (
			<form action={this.props.addr} method="post" id={this.props.id}>
				<Input name="name" type="text" />
				<Input name="surname" type="text" />
				<Input name="birthday" type="date" />
				<Input name="country" type="text" />
				<Input name="email" type="email" />
				<Input name="password" type="password" />
				<Input name="phone" type="tel" />
				<button type="submit">Submit</button>
				<button type="reset">Reset</button>
			</form>
		);
	}
}
