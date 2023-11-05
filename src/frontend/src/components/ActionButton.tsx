import React from 'react';

interface Props {
	label: string;
	action?: React.MouseEventHandler<HTMLButtonElement>;
}

type State = Props;

export default class ActionButton extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { ...props };
	}
	render = () => (
		<button onClick={this.state.action}> {this.state.label} </button>
	);
}
