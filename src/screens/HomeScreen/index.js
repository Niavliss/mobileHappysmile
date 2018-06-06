import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';
import PostResume from './../../components/PostResume'
import Icon from 'react-native-vector-icons/Entypo';

export default class HomeScreen extends Component {
    static navigationOptions = ({navigation})=>({
        title: 'Accueil',
        headerLeft: <Icon.Button onPress={() => navigation.navigate('Posts')} name={'menu'} size={25}/>,

    headerRight:<Icon.Button onPress={() => navigation.navigate('CreatePost')} name={'plus'} size={20} />
})
    render() {
        return (
            <View>
                <PostResume navigation={this.props.navigation}/>

            </View>
        )
    }
}
