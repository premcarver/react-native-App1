import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
    render() {
        return (
            <View>
                <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
                <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
}

export class FlexDimensionsBasics2 extends Component {
    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
}

export class FlexDimensionsBasics3 extends Component {
    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
}

export class FlexDimensionsBasics4 extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
}

export class FlexDimensionsBasics5 extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
}


