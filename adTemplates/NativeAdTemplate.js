import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const NativeAdTemplate = (props) => {
    return (
        <View nativeID={'nativoAdView'} style={styles.nativeCard}>
            <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Hi</Text>
            <Image style={styles.cardImage}
                   nativeID={'articleImage'}/>
            <View>
                <Text nativeID={'articleDate'} style={{textAlign: 'right', height: 30}}>{props.adDate} </Text>
                <Text editable={false} nativeID={'articleTitle'}
                      style={{textAlign: 'center', fontWeight: 'bold', height: 35}}>{props.adTitle}</Text>
                <Text numberOfLines={2} multiline={true} editable={false} nativeID={'articleDescription'}
                      style={{textAlign: 'center', height: 50}}>{props.adDescription} </Text>
            </View>
            <View style={styles.textRow}>
                <Image nativeID={'authorImage'} style={{height: 30, width: 30}}/>
                <Text nativeID={'authorName'}>{props.adAuthorName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nativeCard: {
        borderWidth: 2,
        borderColor: '#23c9f5',
        padding: 10,
        marginBottom: 10,
        elevation: 1
    },
    cardImage: {
        height: 200,
    },
    textCenter: {
        padding: 0,
        margin: 0,
    },
    textRow: {
        flexDirection: 'row'
    },

});

export default NativeAdTemplate;