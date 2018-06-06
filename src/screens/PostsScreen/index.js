import React, {Component} from 'react';
import Nav from './../../components/Nav';
import PostResume from "../../components/PostResume";
import {
    View,
} from 'react-native';


export default class PostsScreen extends Component {
    static navigationOptions = {
        title: 'Liste des posts'
    }
    render() {
        return (
            <View>
            <Nav/>
            <PostResume navigation={this.props.navigation} />
            </View>
        )
    }
}