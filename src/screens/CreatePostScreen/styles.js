import {StyleSheet} from 'react-native';


export default styleCreate = StyleSheet.create({
    container :{
        margin: 12,
        padding: 10,
        flex:1,
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        width :'100%',
        borderWidth:1,
        borderRadius:5,
        padding:5,
    },
    content: {
        height:350,
        width :'100%',
        borderWidth : 1,
        borderRadius: 12,
        marginBottom:15,
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
    },
    enum: {
        width :'100%',
    }

})