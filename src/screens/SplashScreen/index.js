import React, {Component} from 'react';
import styleSplash from './styles'
import {
    Image,
    View
} from 'react-native';
import TokenStorage from './../../services/TokenStorage';

export default class SplashScreen extends Component {


    componentDidMount() {
        if (TokenStorage.token !==  undefined) {
            setTimeout(
                () => {
                    this.props.navigation.navigate('Posts')
                }, 3000);
        }
        else {
            setTimeout(
                () => {
                    this.props.navigation.navigate('Home')
                }, 3000);
        }
    }

    render() {
        return (
            <View style={styleSplash.logo}>
                <Image source={require('./../../assets/img/logo.png')}/>
            </View>
        )
    }
}