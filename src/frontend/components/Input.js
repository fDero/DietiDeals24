import { Component } from 'react';

export default class Input extends Component {
	render() {
		return (
			<div>
				<label for={this.props.name}>{this.props.name}</label>
				<input
					type={this.props.type}
					name={this.props.name}
					defaultValue={this.props.defaultValue || ''}
				></input>
			</div>
		);
	}
}
