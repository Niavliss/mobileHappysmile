import React, {Component} from 'react';
import styleSplash from './styles'
import {
    Image,
    View
} from 'react-native';


export default class SplashScreen extends Component {


    componentDidMount() {
            setTimeout(
                () => {
                this.props.navigation.navigate('Home')}, 3000);
    }

render()
{
    return (
        <View style={styleSplash.logo}>
            <Image source={require('./../../assets/img/logo.png')}/>
        </View>
    )
}
}