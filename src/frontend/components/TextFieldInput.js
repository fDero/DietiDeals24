import React from 'react'

export default class TextFieldInput extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { 
            type: props.type || 'text',
            text: props.text || '', 
            placeholder: props.placeholder || '',
            id: props.id,
            name: props.name,
            autoComplete: props.autoComplete
        }
    }

    updateAction = (event) => {
        const newText = event.target.value;
        this.setState({ text: newText });
        if (this.props.update) this.props.update(newText);
    };

    render = () => (
        <input
            type={this.state.type}
            value={this.state.text}
            onChange={this.updateAction}
            placeholder={this.state.placeholder}
            id={this.state.id}
            name={this.state.name}
            autoComplete={this.state.autoComplete}
        />
    )
}