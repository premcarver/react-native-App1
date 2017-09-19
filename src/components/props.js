import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';


export default class PropComponents extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{ width: 193, height: 110 }} />
        );
    }
}


class Greeting extends Component {
    render() {
        return (
            <View>
                <Text>Hello {this.props.first_name} {this.props.last_name}!</Text>
            </View>
        );
    }
}

export class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Greeting first_name='Rexxar' last_name='Kumar' />
                <Greeting first_name='Jaina' last_name='Kumar' />
                <Greeting first_name='Valeera' last_name='Kumar' />
            </View>
        );
    }
}



