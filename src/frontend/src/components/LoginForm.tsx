import React from 'react'
import TextFieldInput from './TextFieldInput.tsx'

interface Props {
	submit_action: (state : State) => void
	forgot_password_action: (state : State) => void
}

export interface State {
	usernameValue: string
	passwordValue: string
}

export default class LoginForm extends React.Component<Props, State> {
	
	constructor(props: Props) {
		super(props)
		this.state = {
			usernameValue: '',
			passwordValue: ''
		}
	}

	username_field_props = {
		name: 'email',
		type: 'text',
		autoComplete: 'email',
		placeholder: 'email',
		update: (new_username_value: string) => {
			this.setState({
				usernameValue: new_username_value
			})
		}
	}

	password_field_props = {
		name: 'password',
		type: 'password',
		autoComplete: 'current-password',
		placeholder: 'password',
		update: (new_password_value: string) => {
			this.setState({
				passwordValue: new_password_value,
			})
		}
	}

	render = () => (
		<div>
			<form>
				<div className='mb-3'>
					<TextFieldInput {...this.username_field_props} />
				</div>
				<div className='mb-3'>					
					<TextFieldInput {...this.password_field_props} />
				</div>
			</form>
			<button onClick={() => {this.props.submit_action(this.state)}} className="btn btn-primary w-100 mt-1 mb-1"> LOGIN </button>
			<button onClick={() => {this.props.forgot_password_action(this.state)}} className="btn btn-primary w-100 mt-1 mb-1"> forgot password? </button>
		</div>
	)
}
