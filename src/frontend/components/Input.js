import { Component } from 'react';

export default class Input extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<label htmlFor={this.props.name}>{this.props.name}</label>
				<input
					type={this.props.type}
					name={this.props.name}
					defaultValue={this.props.defaultValue}
					onChange={this.props.onChange}
				></input>
			</div>
		);
	}
}
