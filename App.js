/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {createStackNavigator} from 'react-navigation';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import PostsScreen from './src/screens/PostsScreen';
import PostScreen from './src/screens/PostScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import Icon from 'react-native-vector-icons/Entypo';
import styleGen from './src/assets/styles';


export default createStackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: ({}) => ({
                title: 'Connexion',
            }),
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: ({}) => ({
                title: 'Accueil',
                headerLeft: null,
            }),
        },
        Posts: {
            screen: PostsScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Liste des posts',
                headerLeft:null,
                headerRight : <Icon onPress={() => navigation.navigate('CreatePost')} name={'plus'} size={24}
                                    style={styleGen.button}/>,
            }),
        },
        Post: {
            screen: PostScreen,
            navigationOptions: ({}) => ({
                title: 'Post',
            }),
        },
        CreatePost: {
            screen: CreatePostScreen,
            navigationOptions: ({}) => ({
                title: 'Publier',
            }),
        }
    },
    {
        initialRouteName: 'Splash',
    }
);