import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const NativeAdTemplate = (props) => {
    return (
        <View nativeID={'nativoAdView'} style={styles.nativeCard}>
            <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>
            <Image style={styles.cardImage}
                   nativeID={'adImage'}/>
            <View>
                <Text nativeID={'adDate'} style={{textAlign: 'right', height: 30}}>{props.adDate} </Text>
                <Text editable={false} nativeID={'adTitle'}
                      style={{textAlign: 'center', fontWeight: 'bold', height: 35}}>{props.adTitle}</Text>
                <Text numberOfLines={2} multiline={true} editable={false} nativeID={'adDescription'}
                      style={{textAlign: 'center', height: 50}}>{props.adDescription} </Text>
            </View>
            <View style={styles.textRow}>
                <Image nativeID={'adAuthorImage'} style={{height: 30, width: 30}}/>
                <Text nativeID={'adAuthorName'}>{props.adAuthorName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    nativeCard: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#23c9f5',
        padding: 10,
        marginBottom: 10,
        elevation: 1
    },
    cardImage: {
        height: 150,
    },
    textCenter: {
        padding: 0,
        margin: 0,
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

});

export default NativeAdTemplate;