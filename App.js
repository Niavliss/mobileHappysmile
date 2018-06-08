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
        Home:  {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Accueil',
                headerLeft: <Icon.Button onPress={() => navigation.navigate('Posts')} name={'menu'} size={20}/>,
                headerRight: <Icon.Button onPress={() => navigation.navigate('Login')} name={'login'} size={20} />,
            }),
        },
        Posts: {
            screen: PostsScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Liste des posts',
                headerLeft: <Icon.Button onPress={() => navigation.navigate('Home')} name={'home'} size={25}/>,
                headerRight: <Icon.Button onPress={() => navigation.navigate('Login')} name={'login'} size={20}/>,
            }),
        },
        Post: {
            screen: PostScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Post',
                headerRight: <Icon.Button onPress={() => navigation.navigate('Login')} name={'login'} size={20}/>,
            }),
        },
        CreatePost:  {
            screen: CreatePostScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Publier',
                headerLeft: <Icon.Button onPress={() => navigation.navigate('Posts')} name={'menu'} size={20}/>,
            }),
        },
    },
    {
        initialRouteName: 'Splash',
    }
);