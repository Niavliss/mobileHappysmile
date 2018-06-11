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
                            <Text style={styleNav.text}>5 Derniers</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress}>
                        <View style={styleNav.button}>
                            <Text style={styleNav.text}>Tout</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress}>
                        <View style={styleNav.button}>
                            <Text style={styleNav.text}>Blagues</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress}>
                        <View style={styleNav.button}>
                            <Text style={styleNav.text}>Images</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress}>
                        <View style={styleNav.button}>
                            <Text style={styleNav.text}>Videos</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}