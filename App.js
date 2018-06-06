/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {createStackNavigator} from 'react-navigation';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import PostsScreen from './src/screens/PostsScreen';
import PostScreen from './src/screens/PostScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';


export default createStackNavigator(
    {
        Home: HomeScreen,
        Splash: SplashScreen,
        Posts: PostsScreen,
        Post: PostScreen,
        Login: LoginScreen,
        CreatePost: CreatePostScreen
    },
    {
        initialRouteName: 'Splash',
    }
);