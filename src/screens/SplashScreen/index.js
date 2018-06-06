import React, {Component} from 'react';
import styleSlash from './styles'
import {
    Image,
    View
} from 'react-native';


export default class SplashScreen extends Component {
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
            setTimeout(
                () => {
                this.props.navigation.navigate('Posts')}, 3000);
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