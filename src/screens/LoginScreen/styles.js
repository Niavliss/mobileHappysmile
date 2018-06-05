import {StyleSheet} from 'react-native';


export default styleLogin = StyleSheet.create({
    container :{
        margin: 12,
        padding: 10,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color : '#000',
        marginBottom: 15,
    },
    textinput: {
        borderWidth : 1,
        borderRadius: 10,
        borderColor: '#000',
        width : '100%',
        marginBottom: 25,
        fontSize: 22,
    },
    button: {
        borderWidth : 1,
        borderRadius: 12,
        borderColor: '#41390a',
        marginBottom: 25,
        backgroundColor :'#ffc107',
    },
    textbutton: {
        fontSize: 18,
        padding :10,
        fontWeight: 'bold',
    }

})