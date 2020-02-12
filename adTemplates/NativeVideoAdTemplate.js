import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import Video from "react-native-video";
import {NativoVideo} from "react-native-nativo-ads";

const NativeVideoAdTemplate = (props) => {
    return (
        <View nativeID={'nativoVideoAdView'} style={styles.videoCard}>
            <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>
            <View style={styles.cardImage}>
                <NativoVideo/>
            </View>
            <View style={styles.textCenter}>
                <Text nativeID={'articleDate'}
                      style={{textAlign: 'right', height: 30}}>{props.adDate}</Text>
                <Text nativeID={'articleTitle'} style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    height: 35
                }}>{props.adTitle}</Text>
                <Text numberOfLines={2} multiline={true} nativeID={'articleDescription'}
                      style={{textAlign: 'center', height: 50}}>{props.adDescription}</Text>
            </View>
            <View style={styles.textRow}>
                <Image nativeID={'authorImage'} style={{height: 30, width: 30}}/>
                <Text nativeID={'authorName'}>{props.adAuthorName}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoCard: {
        borderWidth: 2,
        borderColor: '#23c9f5',
        width: 400,
        height: 380,
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
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

});

export default NativeVideoAdTemplate;