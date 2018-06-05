import React, {Component} from 'react';
import styleSlash from './styles'
import {
    Image,
    View
} from 'react-native';


export default class SlashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
            setTimeout(
                () => {
                this.props.navigation.navigate('Home')}, 3000);
    }

render()
{
    return (
        <View style={styleSlash.logo}>
            <Image source={require('./../../assets/img/logo.png')}/>
        </View>
    )
}
}