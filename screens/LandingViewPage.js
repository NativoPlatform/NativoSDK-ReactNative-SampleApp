import {DeviceEventEmitter, NativeModules, StyleSheet, View} from "react-native";
import React, {Component} from 'react';
import NativoLandingPage from "react-native-nativo-sdk-alpha.1/NativoLandingPage";
import LandingPageAdTemplate from "../adTemplates/LandingPageAdTemplate";

export default class LandingViewPage extends Component<Props> {

    constructor(props: P, context: any) {
        super(props, context);
        NativeModules.NativoRNSdk.registerTemplates();
        NativeModules.NativoRNSdk.enableDebugLogs();
        NativeModules.NativoRNSdk.enableTestAds("native");
    }


    static navigationOptions = {
        title: 'LandingPage',
    };

    componentDidMount(): void {
        DeviceEventEmitter.addListener('onPageFinished', (event) => {
            console.log("onPageFinished called LVP...", event.webviewContentHeight);
        });
        DeviceEventEmitter.addListener('onReceivedError', (event) => {
            console.log("onReceivedError called LVP ...");
        });

    }

    render() {
        const {navigation} = this.props;
        const adId = navigation.getParam('adId');
        const containerHash = navigation.getParam('containerHash');
        const url = navigation.getParam('sectionUrl');
        return (
            <View style={styles.container}>
                <NativoLandingPage
                    adId={adId}
                    containerHash={containerHash}
                    url={url}
                    landingPageAdTemplate={LandingPageAdTemplate}
                    {...this.props}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
});