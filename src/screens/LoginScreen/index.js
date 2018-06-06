import React, {Component} from 'react';
import styleLogin from './styles';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Connexion'
    }
    render() {
        return (
            <View style={styleLogin.container}>
                <Text style={styleLogin.text}> Adresse Mail </Text>
                <TextInput style={styleLogin.textinput}/>
                <Text style={styleLogin.text}> Mot de passe </Text>
                <TextInput style={styleLogin.textinput}/>
                <TouchableOpacity style={styleLogin.button} onPress={this.onPress}>

                        <Text style={styleLogin.textbutton}>Envoyez</Text>

                </TouchableOpacity>

            </View>
        )
    }
}