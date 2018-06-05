import React, {Component} from 'react';
import {
    View,
    Text,

} from 'react-native';
import stylePost from "./styles";


export default class PostsScreen extends Component {

    render() {
        return (
            <View>
                <View style={stylePost.box}>
                    <Text style={stylePost.title}> Titre </Text>
                    <Text> Nom de l'auteur </Text>
                    <Text> Contenu: du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                        du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                        du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                        du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                        du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla
                        bla,
                        du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                    </Text>
                </View>
            </View>
        )
    }
}