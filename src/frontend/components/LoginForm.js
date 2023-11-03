import React from 'react'

import TextFieldInput from './TextFieldInput'
import ActionButton from './ActionButton';

export default class LoginForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username_value: "",
            password_value: ""
        }
    }

    username_field_props = {
        name: "username",
        type: "text",
        autoComplete: "username",
        placeholder: "username",
        update: (new_username_value) => {this.setState({
            username_value: new_username_value
        })}
    }

    password_field_props = {
        name: "password",
        type: "password",
        autoComplete: "current-password",
        placeholder: "password",
        update: (new_password_value) => {this.setState({
            password_value: new_password_value
        })}
    }

	render = () => (
        <div>
		    <form>
                <TextFieldInput {...this.username_field_props} />
                <TextFieldInput {...this.password_field_props} />
            </form>
            <ActionButton label="show" action={() => {console.log(this.state)}} />
        </div>
    )
}