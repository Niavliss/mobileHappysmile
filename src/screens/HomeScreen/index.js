import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import PostResume from './../../components/PostResume';
import TokenStorage from './../../services/TokenStorage';
import Header from '../../components/Header';

export default class HomeScreen extends Component {

    render() {
        return (
            <View>
                <Header navigation={this.props.navigation}/>
                <PostResume navigation={this.props.navigation}/>
            </View>
        )
    }
}
