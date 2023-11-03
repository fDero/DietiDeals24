import { Component } from 'react';
import { Button, View } from 'react-native'
import { useNavigate } from 'react-router-dom';


const RedirectButton = ({ title, destination }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        console.log(`redicting to ${destination} screen`);
        navigate(destination);
    };

    return <Button title={title} onPress={handleNavigation} />;
};

export default class TeleportButton extends Component {
	
    constructor(props){
        super(props)
        this.title = props.title
        this.destination = props.destination
    }
    
    render = () => ( 
        <RedirectButton title={this.title} destination={this.destination}/> 
    )
}