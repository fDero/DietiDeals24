import React from 'react'
import LoginForm from '../components/LoginForm.tsx'
import { State as FormState } from '../components/LoginForm.tsx'
import { HookRouter } from '../Hooks.tsx'
import { NavigateFunction } from 'react-router-dom'
import GoogleLogin from '@leecheuk/react-google-login'

interface Props {
	navigate: NavigateFunction
}

type State = void

class LoginPage extends React.Component<Props, State> {
	
	constructor(props : Props){
		super(props)
	}

	google_button_props = {
		clientId: "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",
		buttonText: "Login",
		onSuccess: (() => {}),
		onFailure: (() => {}),
		cookiePolicy: 'single_host_origin',
		render: (renderProps : any) => (
			<button onClick={renderProps.onClick} disabled={false} className="btn btn-danger w-100 mt-1"> 
				LOGIN WITH GOOGLE
			</button>
		)
	}

	submit_action = (fs : FormState) => {
		console.log(fs.passwordValue)
		console.log(fs.usernameValue) 
		this.props.navigate('/content')
	}

	forgot_password_action = (fs : FormState) => {
		console.log(fs)
	}

	
						
	render = () => (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className='card shadow' style={{width: '24rem' }}>
				<div className='card-body'>
					{/*-- LOGO --*/}
					<LoginForm submit_action={this.submit_action} forgot_password_action={this.forgot_password_action} />
					<GoogleLogin {...this.google_button_props} />
				</div>
			</div>
		</div>
	)
}

const HookedLoginPage = HookRouter(LoginPage)
export default HookedLoginPage