import React, {Component} from 'react';
import {Button, StyleSheet, View, NativeModules} from 'react-native';
import { NativoSDK } from 'react-native-nativo-ads';
import * as constant from "./../util/AppConstants"
import {YellowBox} from 'react-native';

export default class HomePage extends Component {

    constructor(props, context) {
        super(props, context);
        NativoSDK.enableDevLogs();
        YellowBox.ignoreWarnings(['Trying to load empty source']);
    }

    static navigationOptions = {
        title: 'Home Page',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button title={'DFP Ad Page'}
                            onPress={() => this.props.navigation.navigate('DfpScreen')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
