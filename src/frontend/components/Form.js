import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {
	constructor() {
		super();
		this.state = {};
	}

	handleChange(name, value) {
		this.setState(oldState => ({
			...oldState,
			[name]: value,
		}));
	}

	handleSubmit(event) {
		if (this.props.handleSubmit) {
			this.props.handleSubmit(this.state);
			event.preventDefault();
		}
	}

	render() {
		let i = 0;
		return (
			<form
				action={this.props.addr}
				method="post"
				id={this.props.id}
				onSubmit={this.handleSubmit.bind(this)}
			>
				{this.props.inputs.map(({ name, type, defaultValue }) => (
					<Input
						name={name}
						type={type}
						defaultValue={defaultValue}
						onChange={event => {
							this.handleChange.bind(this)(name, event.target.value);
						}}
						key={i++}
					/>
				))}
				<button type="submit">Submit</button>
				<button type="reset">Reset</button>
			</form>
		);
	}
}
