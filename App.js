import React from 'react';
import {Component} from 'react';
import {
    Image,
    Button,
    NativeEventEmitter,
    requireNativeComponent,
    StyleSheet,
    Text,
    View,
    ProgressBarAndroid,
    ImageBackground
} from 'react-native';

const NativoAdContainer = requireNativeComponent("NativoContainer")
var sampleSectionUrl = 'http://www.nativo.net/test/'

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.handleAdFailedToLoad = this.handleAdFailedToLoad.bind(this);
    }


    componentDidMount(): void {
        const eventEmitter = new NativeEventEmitter(NativoAdContainer);
        eventEmitter.addListener('EventReminder', (event) => {
            console.log("event values : " + event.sectionUrl) // "someValue"
            console.log("event values : " + event.adId) // "someValue"
            console.log("event values : " + event.containerHash) // "someValue"
            this.props.navigation.navigate('LandingScreen', {
                sectionUrl: event.sectionUrl,
                adId: event.adId,
                containerHash: event.containerHash
            })
        });
    }

    handleAdFailedToLoad(event) {
        console.log("failed");
    }

    static navigationOptions = {
        title: 'Nativo React Sample App',
    };

    render() {
        return (
            <View style={styles.container}>
                <NativoAdContainer sectionUrl={{'url': sampleSectionUrl, 'index': 0}}>
                    <View nativeID={'nativoAdView'} style={styles.card}>
                        <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>
                        <Image style={styles.cardImage}
                               nativeID={'articleImage'}/>
                        <View style={styles.textCenter}>
                            <Text nativeID={'articleDate'} style={{textAlign: 'right'}}>Date </Text>
                            <Text nativeID={'articleTitle'} style={{textAlign: 'center', fontWeight: 'bold'}}>Article
                                Title</Text>
                            <Text nativeID={'articleDescription'} style={{textAlign: 'center'}}>Article
                                Description</Text>
                        </View>
                        <View style={styles.textRow}>
                            <Image nativeID={'authorImage'}></Image>
                            <Text nativeID={'authorName'}>Author Name</Text>
                        </View>
                    </View>
                </NativoAdContainer>
                {/*<NativoAdContainer sectionUrl={{'url': sampleSectionUrl, 'index': 1}}>*/}
                {/*    <View nativeID={'nativoAdView'} style={styles.card}>*/}
                {/*        <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>*/}
                {/*        <View style={styles.cardImage}>*/}
                {/*            <Video nativeID={'videoView'} useTextureView={true} style={styles.backgroundVideo}/>*/}
                {/*            <ImageBackground style={{flexDirection:'column', width: '100%', height:'100%', alignItems: 'center', justifyContent: 'center'}} nativeID={'articleImage'}>*/}
                {/*                <ImageBackground nativeID={'videoRestart'} style={{ flex:1,width:40,height:'100%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>*/}
                {/*                <ImageBackground nativeID={'videoPlay'} style={{width: '100%', height: '100%'}}>*/}
                {/*                <ProgressBarAndroid style={{width: '100%', height: '100%'}} nativeID={'videoProgress'}/>*/}
                {/*                </ImageBackground>*/}
                {/*                </ImageBackground>*/}
                {/*                <ImageBackground style={{ width: '90%', height: 10, bottom:10, justifyContent:'flex-end'}} >*/}
                {/*                    <Image nativeID={'videoMuteIndicator'} style={{width:30, height:30, alignSelf:'flex-end'}}/>*/}
                {/*                </ImageBackground>*/}
                {/*            </ImageBackground>*/}

                {/*        </View>*/}
                {/*        <View style={styles.textCenter}>*/}
                {/*            <Text nativeID={'articleDate'} style={{textAlign: 'right'}}>Date </Text>*/}
                {/*            <Text nativeID={'articleTitle'} style={{textAlign: 'center', fontWeight: 'bold'}}>Article*/}
                {/*                Title</Text>*/}
                {/*            <Text nativeID={'articleDescription'} style={{textAlign: 'center'}}>Article*/}
                {/*                Description</Text>*/}
                {/*        </View>*/}
                {/*        <View style={styles.textRow}>*/}
                {/*            <Image nativeID={'authorImage'}></Image>*/}
                {/*            <Text nativeID={'authorName'}>Author Name</Text>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*</NativoAdContainer>*/}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    absoluteCenter: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallCenter: {width: 75, height: 75, alignItems: 'center', justifyContent: 'center'}

});
