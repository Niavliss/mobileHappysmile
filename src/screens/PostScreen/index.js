import React, {Component} from 'react';
import {
    View,
    Text,

} from 'react-native';
import stylePost from "./styles";


export default class PostsScreen extends Component {
    static navigationOptions = {
        title: 'Post'
    }
    constructor(props){
        super(props);
        this.state ={
            post: this.props.navigation.getParam('post', null)
        }
    }
    render() {
        return (
            <View>
                <View style={stylePost.box}>
                    <Text style={stylePost.title}>{this.state.post.title}</Text>
                    <Text>Par {this.state.post.user.pseudo}</Text>
                    <Text>{this.state.post.content}</Text>
                </View>
            </View>
        )
    }
}