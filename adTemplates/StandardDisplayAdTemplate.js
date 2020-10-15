import React from 'react';
import {DeviceEventEmitter, StyleSheet, Text, View} from "react-native";
import {NativoWebContent} from "react-native-nativo-ads";
import styles from "./../util/Styles"

const StandardDisplayAdTemplate = (props) => {
    return (
        <View nativeID={'nativoSDAdView'} style={styles.nativeCard}>
            <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>
            <NativoWebContent {...props} style={{width: props.displayWidth, height: props.displayHeight, alignSelf: 'center', alignContent: 'center'}} />
        </View>
    );
}

export default StandardDisplayAdTemplate;