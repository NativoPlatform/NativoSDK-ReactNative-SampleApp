import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {NativoVideo} from "react-native-nativo-ads";

const NativeVideoAdTemplate = (props) => {
    return (
        <View nativeID={'nativoVideoAdView'} style={styles.videoCard}>
            <View style={styles.textRow}>
                <Text style={{color: '#1A1AFF', fontWeight: 'bold', flex: 1}}>Sponsored Content</Text>
                <Image nativeID={'adChoicesImage'} style={{height: 20, width: 20}}/>
            </View>
            <NativoVideo style={styles.video} />
            <View style={styles.textCenter}>
                <Text nativeID={'adDate'}
                      style={{textAlign: 'right', height: 30}}>{props.adDate}</Text>
                <Text nativeID={'adTitle'} style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    height: 35
                }}>{props.adTitle}</Text>
                <Text numberOfLines={2} multiline={true} nativeID={'adDescription'}
                      style={{textAlign: 'center', height: 50}}>{props.adDescription}</Text>
            </View>
            <View style={styles.textRow}>
                <Image nativeID={'adAuthorImage'} style={{height: 30, width: 30}}/>
                <Text nativeID={'adAuthorName'}>{props.adAuthorName}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    videoCard: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#23c9f5',
        padding: 10,
        marginBottom: 10,
        elevation: 1
    },
    video: {
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
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

});

export default NativeVideoAdTemplate;