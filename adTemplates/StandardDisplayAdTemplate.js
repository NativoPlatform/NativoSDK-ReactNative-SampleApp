import React, {useEffect} from 'react';
import {DeviceEventEmitter, StyleSheet, Text, View} from "react-native";
import {WebView} from "react-native-webview";

const StandardDisplayAdTemplate = (props) => {
    useEffect(
        () => {
            setCallbacks()
        },
        [],
    )
    return (
        <View nativeID={'nativoSDAdView'} style={styles.nativeCard}>
            <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>
            <WebView nativeID={'nativoAdWebView'} scalesPageToFit={false} scrollEnabled={false}
                     style={{width: 300, height: 250, alignSelf: 'center'}}/>
        </View>
    );
}

function setCallbacks() {
    DeviceEventEmitter.addListener('onStandardDisplayPageFinished', (event) => {
        console.log("onStandardDisplayPageFinished called ...");
    });
    DeviceEventEmitter.addListener('onStandardDisplayReceivedError', (event) => {
        console.log("onStandardDisplayReceivedError called ...");
    });
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nativeCard: {
        borderWidth: 2,
        borderColor: '#23c9f5',
        width: 400,
        height: 300,
        padding: 10,
        marginBottom: 10,
        elevation: 1,
    },
});

export default StandardDisplayAdTemplate