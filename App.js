import React, {Component} from 'react';
import {Image, requireNativeComponent, StyleSheet, Text, View, ProgressBarAndroid} from 'react-native';
import Video from "react-native-video";

const NativoAd = requireNativeComponent("NativoAd")
const NativoAdContainer = requireNativeComponent("NativoContainer")
var sampleSectionUrl = 'http://www.nativo.net/test/'

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.handleAdFailedToLoad = this.handleAdFailedToLoad.bind(this);
    }

    handleAdFailedToLoad(event) {
        console.log("failed");
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<NativoAdContainer sectionUrl={{'url':sampleSectionUrl,'index':0}}>*/}
                {/*    <View nativeID={'nativoAdView'} style={styles.card}>*/}
                {/*        <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>*/}
                {/*        <Image source={{uri: 'http://i.imgur.com/91AR0Lo.jpg'}} style={styles.cardImage}*/}
                {/*               nativeID={'articleImage'}/>*/}
                {/*        <View style={styles.textCenter}>*/}
                {/*            <Text nativeID={'articleDate'} style={{textAlign: 'right'}}>Date </Text>*/}
                {/*            <Text nativeID={'articleTitle'} style={{textAlign: 'center', fontWeight: 'bold'}}>Article Title</Text>*/}
                {/*            <Text nativeID={'articleDescription'} style={{textAlign: 'center'}}>Article*/}
                {/*                Description</Text>*/}
                {/*        </View>*/}
                {/*        <View style={styles.textRow}>*/}
                {/*            <Image nativeID={'authorImage'}></Image>*/}
                {/*            <Text nativeID={'authorName'}>Author Name</Text>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*</NativoAdContainer>*/}
                <NativoAdContainer sectionUrl={{'url':sampleSectionUrl,'index':1}}>
                    <View nativeID={'nativoAdView'} style={styles.card}>
                        <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>
                        <View style={styles.cardImage}>
                            <Image source={{uri: 'http://i.imgur.com/91AR0Lo.jpg'}} nativeID={'articleImage'}/>
                            <Image nativeID={'videoRestart'}/>
                            <Image nativeID={'videoPlay'}/>
                            <ProgressBarAndroid nativeID={'videoProgress'}/>
                            <Image nativeID={'videoMuteIndicator'}/>
                            <Video nativeID={'videoView'} useTextureView={true} style={styles.backgroundVideo}/>
                        </View>
                        <View style={styles.textCenter}>
                            <Text nativeID={'articleDate'} style={{textAlign: 'right'}}>Date </Text>
                            <Text nativeID={'articleTitle'} style={{textAlign: 'center', fontWeight: 'bold'}}>Article Title</Text>
                            <Text nativeID={'articleDescription'} style={{textAlign: 'center'}}>Article
                                Description</Text>
                        </View>
                        <View style={styles.textRow}>
                            <Image nativeID={'authorImage'}></Image>
                            <Text nativeID={'authorName'}>Author Name</Text>
                        </View>
                    </View>
                </NativoAdContainer>

                {/*<View nativeID={'nativoAdView'} style={styles.card}>*/}
                {/*<Video useTextureView={true} style={styles.backgroundVideo} source={{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}/>*/}
                {/*</View>*/}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        margin: 10
    },
    item: {
        padding: 10,
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'flex-start'

    },
    card: {
        borderWidth: 3,
        borderRadius: 3,
        borderColor: '#000',
        width: 400,
        height: 350,
        padding: 10
    },
    cardImage: {
        height: 200,
        padding: 10,
    },
    textCenter: {
        padding: 10,
    },
    textRow: {
        flexDirection: 'row'
    },
    textLeft: {
        position: 'absolute',
        left: 0,
        top: 0,
        padding: 10,
    },
    textRight: {
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 10
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
