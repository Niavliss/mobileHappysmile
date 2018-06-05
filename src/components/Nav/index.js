import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import styleNav from './styles';

export default class Nav extends Component {

    render() {
        return (
            <View style={styleNav.sortof}>
                <ScrollView horizontal={true}>
                    <TouchableOpacity onPress={this.onPress}>
                        <View style={styleNav.button}>
                            <Text>5 Derniers</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress}>
                        <View style={styleNav.button}>
                            <Text>Tout</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress}>
                        <View style={styleNav.button}>
                            <Text>Blagues</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress}>
                        <View style={styleNav.button}>
                            <Text>Images</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress}>
                        <View style={styleNav.button}>
                            <Text>Videos</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}