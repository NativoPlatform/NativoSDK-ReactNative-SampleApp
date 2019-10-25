import React from 'react';
import {Image, ImageBackground, ProgressBarAndroid, StyleSheet, Text, View} from "react-native";
import Video from "react-native-video";

const NativeVideoAdTemplate = (props) => {
    return (
        <View nativeID={'nativoVideoAdView'} style={styles.videoCard}>
            <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>
            <View style={styles.cardImage}>
                <Video nativeID={'videoView'} useTextureView={true} style={styles.backgroundVideo}/>
                <ImageBackground style={{
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} nativeID={'articleImage'}>
                    <ImageBackground nativeID={'videoRestart'} style={{
                        flex: 1,
                        width: 40,
                        height: '100%',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <ImageBackground nativeID={'videoPlay'} style={{width: '100%', height: '100%'}}>
                            <ProgressBarAndroid style={{width: '100%', height: '100%'}}
                                                nativeID={'videoProgress'}/>
                        </ImageBackground>
                    </ImageBackground>
                    <ImageBackground
                        style={{width: '90%', height: 10, bottom: 10, justifyContent: 'flex-end'}}>
                        <Image nativeID={'videoMuteIndicator'}
                               style={{width: 30, height: 30, alignSelf: 'flex-end'}}/>
                    </ImageBackground>
                </ImageBackground>

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