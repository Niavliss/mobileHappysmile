import React, {Component} from 'react';
import styleLogin from './styles';
import {
    View,
    Text,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';
import TokenStorage from '../../services/TokenStorage';


export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token:''
        };
    }

    Login = async () => {
        fetch('https://www.happy-smile.fr/oauth/token', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "grant_type": "password",
                "client_id": "2",
                "client_secret": "hOKwf2P7Z7kKtxVclqZLjb4eEzDtLTNQ2XWQJPkp",
                "username": this.state.email,
                "password": this.state.password,
                "scope": ""
            })
        }).then((response) => response.json())
            .then((res) => {
                if (typeof(res.message) !== "undefined") {
                    Alert.alert("Error signing up", "Error: " + res.message);

                }
                else {
                    TokenStorage.token = res.access_token;
                    Alert.alert("Success", "You have succesfully login");
                    this.props.navigation.navigate('Posts');
                }

            }).catch((error) => {
            console.error(error);
        });
    };

    render() {

            return (
                <View style={styleLogin.container}>
                    <Text style={styleLogin.text}> Adresse Mail </Text>
                    <TextInput
                        onChangeText={TextInputValue =>
                            this.setState({email: TextInputValue})}
                        style={styleLogin.textinput}
                        underlineColorAndroid="transparent"/>
                    <Text style={styleLogin.text}> Mot de passe </Text>
                    <TextInput
                        onChangeText={TextInputValue =>
                            this.setState({password: TextInputValue})}
                        style={styleLogin.textinput}
                        underlineColorAndroid="transparent"
                        secureTextEntry
                    />
                    <TouchableOpacity style={styleLogin.button} onPress={this.Login.bind(this)}>

                        <Text style={styleLogin.textbutton}>Envoyez</Text>

                    </TouchableOpacity>

                </View>
            )
        }
}