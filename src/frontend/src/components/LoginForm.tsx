import React from 'react';
import TextFieldInput from './TextFieldInput.tsx';
import ActionButton from './ActionButton.tsx';

interface Props {}

interface State {
	usernameValue: string;
	passwordValue: string;
}

export default class LoginForm extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			usernameValue: '',
			passwordValue: '',
		};
	}

	username_field_props = {
		name: 'username',
		type: 'text',
		autoComplete: 'username',
		placeholder: 'username',
		update: (new_username_value: string) => {
			this.setState({
				usernameValue: new_username_value,
			});
		},
	};

	password_field_props = {
		name: 'password',
		type: 'password',
		autoComplete: 'current-password',
		placeholder: 'password',
		update: (new_password_value: string) => {
			this.setState({
				passwordValue: new_password_value,
			});
		},
	};

	render = () => (
		<div>
			<form>
				<TextFieldInput {...this.username_field_props} />
				<TextFieldInput {...this.password_field_props} />
			</form>
		</div>
	);
}
