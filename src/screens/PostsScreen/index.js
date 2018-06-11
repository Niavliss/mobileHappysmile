import React, {Component} from 'react';
import Nav from './../../components/Nav';
import PostResume from "../../components/PostResume";
import {
    View,
} from 'react-native';
import TokenStorage from './../../services/TokenStorage';


export default class PostsScreen extends Component {
    render() {
        if (TokenStorage.token !== '') {
            return (

                <View>
                    <Nav/>
                    <PostResume navigation={this.props.navigation}/>
                </View>

            )
        }
        else {
            this.props.navigation.navigate('Home');
        }
    }
}