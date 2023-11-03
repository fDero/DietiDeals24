import React from 'react'

export default class ActionButton extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            action: props.action,
            label: props.label || ''
        }
    }

    render = () => (
        <button onClick={this.state.action} > {this.state.label} </button>
    )
}