import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import styleHead from './styles';

export default class Header extends Component {

    render() {
        return (
            <View style={styleHead.view}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <View style={styleHead.button}>
                        <Text style={styleHead.text}> Login </Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }
}
