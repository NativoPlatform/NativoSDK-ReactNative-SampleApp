import React from 'react';
import {DeviceEventEmitter, StyleSheet, Text, View} from "react-native";
import {NativoWebContent} from "react-native-nativo-ads";

const StandardDisplayAdTemplate = (props) => {
    return (
        <View nativeID={'nativoSDAdView'} style={styles.nativeCard}>
            <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>
            <NativoWebContent {...props} style={{width: props.displayWidth, height: props.displayHeight, alignSelf: 'center', alignContent: 'center'}} />
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

export default StandardDisplayAdTemplate;