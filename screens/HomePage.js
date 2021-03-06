import React, {Component} from 'react';
import {Button, StyleSheet, View, NativeModules} from 'react-native';
import { NativoSDK } from 'react-native-nativo-ads';
import * as constant from "./../util/AppConstants"
import {LogBox} from 'react-native';

export default class HomePage extends Component {

    constructor(props, context) {
        super(props, context);
        NativoSDK.enableDevLogs();
        // NativoSDK.enableTestAdvertisementsWithType(NativoSDK.AdTypes.NATIVE);
        NativoSDK.prefetchAdForSection(constant.sampleSectionUrl, (error, adDidGetFill, section) => {
            if (adDidGetFill) {
                console.log("Got an ad: "+section);
            } else {
                console.log("No fill");
            }
        });
        LogBox.ignoreLogs(['Trying to load empty source']);
    }

    static navigationOptions = {
        title: 'Home Page',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button title={'StandAlone Ad Page'}
                            onPress={() => this.props.navigation.navigate('StandAloneAdScreen')}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'FlatList Ad Page'}
                            onPress={() => this.props.navigation.navigate('FlatListAdScreen')}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'Scroll Ad Page'}
                            onPress={() => this.props.navigation.navigate('ScrollAdScreen')}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'MOAP Ad Page'}
                            onPress={() => this.props.navigation.navigate('MOAPAdScreen')}/>
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