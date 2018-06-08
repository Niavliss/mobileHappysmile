import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import PostResume from './../../components/PostResume'

export default class HomeScreen extends Component {

    render() {
        return (
            <View>
                <PostResume navigation={this.props.navigation}/>

            </View>
        )
    }
}
