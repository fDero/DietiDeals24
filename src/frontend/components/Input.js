import { Component } from 'react';

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = { value: this.props.defaultValue || '' };
	}

	onChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<div>
				<label for={this.props.name}>{this.props.name}</label>
				<input
					type={this.props.type}
					name={this.props.name}
					value={this.state.value}
					onChange={this.onChange}
				></input>
			</div>
		);
	}
}
