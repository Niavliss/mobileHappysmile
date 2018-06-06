import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Picker,
} from 'react-native';
import styleCreate from './styles';

export default class CreateScreen extends Component {
    static navigationOptions = {
        title: 'Publier'
    }
    constructor(props) {
        super(props);
        this.state = {type: '',};
    }

    render() {
        return (
            <View style={styleCreate.container} >
                <TextInput style={styleCreate.title} placeholder={'Titre'} underlineColorAndroid="transparent"/>
                <Picker style={styleCreate.enum}
                    selectedValue={this.state.type}
                    onValueChange={(itemValue) => this.setState({type: itemValue})}>
                    <Picker.Item label="Blague" value="Blague"/>
                    <Picker.Item label="Image" value="Image"/>
                    <Picker.Item label="Video" value="Video"/>
                </Picker>
                <TextInput style={styleCreate.content} underlineColorAndroid="transparent" />
                <TouchableOpacity style={styleCreate.button} onPress={this.onPress}>

                    <Text style={styleCreate.textbutton}>Envoyez</Text>

                </TouchableOpacity>

            </View>
        )
    }
}