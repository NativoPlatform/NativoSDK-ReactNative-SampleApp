import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NativeModules} from 'react-native';

export default class HomePage extends Component<Props> {

    constructor(props: P, context: any) {
        super(props, context);
        NativeModules.NativoRNSdk.registerTemplates();
        NativeModules.NativoRNSdk.enableDebugLogs();
        NativeModules.NativoRNSdk.enableTestAds("in_feed_video");
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