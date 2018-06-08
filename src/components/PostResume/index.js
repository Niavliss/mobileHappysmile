import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import stylePost from './styles';


export default class PostResume extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        return fetch('https://www.happy-smile.fr/api/post')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <View style={stylePost.box}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Post', {post: item})}>
                                <Text style={stylePost.title}>
                                    {item.title}
                                </Text>
                                <Text>
                                    Par {item.user.pseudo}
                                </Text>
                                <Text>
                                    {item.content}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}