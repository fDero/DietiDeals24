import React from 'react'

interface Props {
	type: string
	name: string
	text?: string
	placeholder?: string
	autoComplete?: string
	update?: (new_username_value: string) => void
    icon: any
}

type State = Props;

export default class TextFieldInput extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { 
			type: props.type || '',
			name: props.name || '',
			text: props.text || '',
			placeholder: props.placeholder || '',
			autoComplete: props.autoComplete || '',
			update: props.update || ((_ : string)=>{}),
            icon: props.icon
		}
	}
	updateAction: React.ChangeEventHandler<HTMLInputElement> = event => {
		const newText = event.target.value;
		this.setState({ text: newText });
		if (this.props.update) this.props.update(newText);
	}

	render = () => (
		<div className="input-group">
  		<div className="input-group-prepend">
  		  <span className="input-group-text">
            {this.state.icon}
  		  </span>
  		</div>
  			<input
  			  type={this.state.type}
  			  value={this.state.text}
  			  onChange={this.updateAction}
  			  placeholder={this.state.placeholder}
  			  name={this.state.name}
  			  autoComplete={this.state.autoComplete}
  			  className="form-control"
  			/>
		</div>
	)
}