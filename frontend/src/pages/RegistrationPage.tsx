import React from 'react'
import RegistrationForm from '../components/RegistrationForm.tsx'
import { State as FormState } from '../components/RegistrationForm.tsx'
import { HookRouter } from '../Hooks.tsx'
import { NavigateFunction } from 'react-router-dom'
import GoogleLogin from '@leecheuk/react-google-login'

interface Props {
	navigate: NavigateFunction
}

type State = void

class RegistrationPage extends React.Component<Props, State> {
	
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
			<button onClick={renderProps.onClick} disabled={false} className="btn btn-google w-100 mt-1"> 
				<i className='justify-content-center align-items-center'>
  					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 120">
    					<image href="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" width="100" height="100"/>
  					</svg>
				</i>
				<b>SIGN UP GOOGLE</b>
			</button>
		)
	}

	submit_action = (fs : FormState) => {
		console.log(fs.passwordValue)
		console.log(fs.usernameValue) 
		this.props.navigate('/content')
	}

	already_have_account_action = (fs : FormState) => {
		console.log(fs)
	}
						
	render = () => (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className='card shadow' style={{width: '24rem' }}>
				<div className='card-img d-flex justify-content-center align-items-center'>
					<img src="logo.svg" alt="DietiDeals24-LOGO" width="300rem"/>
				</div>
				<div className='card-body '>
					<RegistrationForm submit_action={this.submit_action} already_have_account_action={this.already_have_account_action} />
					<GoogleLogin {...this.google_button_props} />	
					<button onClick={() => {}} className="link_button w-100 mt-2"> already have an account? </button>
				</div>
			</div>
		</div>
	)
}

const HookedLoginPage = HookRouter(RegistrationPage)
export default HookedLoginPage
