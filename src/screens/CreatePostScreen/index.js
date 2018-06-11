import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Picker, Alert,
} from 'react-native';
import styleCreate from './styles';
import TokenStorage from './../../services/TokenStorage';

export default class CreateScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {title: '', content: '', type_media: ''};
    }

    Create = async () => {
        fetch('https://www.happy-smile.fr/api/post', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + TokenStorage.token
            },
            body: JSON.stringify({
                "title": this.state.title,
                "content": this.state.content,
                "type_media": this.state.type_media,
                "user_id": '1'
            })
        }).then((response) => response.json())
            .then((res) => {
                if (typeof(res.message) !== "undefined") {
                    Alert.alert("Error post", "Error: " + res.message);
                }
                else {
                    Alert.alert("Success", "You have succesfully posted");
                    this.props.navigation.navigate('Posts');
                }

            }).catch((error) => {
            console.error(error);
        });
    };

    render() {
        return (
            <View style={styleCreate.container} >
                <TextInput
                    style={styleCreate.title}
                    placeholder={'Titre'}
                    underlineColorAndroid="transparent"
                    onChangeText={TextInputValue => this.setState({title: TextInputValue})}
                />
                <Picker style={styleCreate.enum}
                    selectedValue={this.state.type_media}
                    onValueChange={(itemValue) => this.setState({type_media: itemValue})}>
                    <Picker.Item label="blague" value="blague"/>
                    <Picker.Item label="image" value="image"/>
                    <Picker.Item label="video" value="video"/>
                </Picker>
                <TextInput
                    onChangeText={TextInputValue => this.setState({content: TextInputValue})}
                    style={styleCreate.content}
                    underlineColorAndroid="transparent" />
                <TouchableOpacity style={styleCreate.button} onPress={this.Create.bind(this)}>

                    <Text style={styleCreate.textbutton}>Envoyez</Text>

                </TouchableOpacity>

            </View>
        )
    }
}