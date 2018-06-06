import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import stylePost from './styles';


export default class PostResume extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ScrollView>

                    <View style={stylePost.box}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Post')}>
                        <Text style={stylePost.title}> Titre </Text>
                        <Text> Nom de l'auteur </Text>
                        <Text> Contenu: du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du
                            bla
                            bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={stylePost.box}>
                        <Text style={stylePost.title}> Titre </Text>
                        <Text> Nom de l'auteur </Text>
                        <Text> Contenu: du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du
                            bla
                            bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                        </Text>
                    </View>
                    <View style={stylePost.box}>
                        <Text style={stylePost.title}> Titre </Text>
                        <Text> Nom de l'auteur </Text>
                        <Text> Contenu: du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du
                            bla
                            bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                        </Text>
                    </View>
                    <View style={stylePost.box}>
                        <Text style={stylePost.title}> Titre </Text>
                        <Text> Nom de l'auteur </Text>
                        <Text> Contenu: du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du
                            bla
                            bla,
                            du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,du bla bla,
                        </Text>
                    </View>
            </ScrollView>


    )
    }
    }