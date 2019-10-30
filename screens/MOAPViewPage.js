import React, {Component} from 'react';
import {WebView} from "react-native-webview";
import {View} from "react-native";
import {NativeModules} from 'react-native';

let MOAP_SECTION_URL = "http://www.nativo.net/sdk/pubops/moap";
let PUBLISHER_URL = "https://s3-us-west-2.amazonaws.com/test-site.ntv.io/sdk/webview_moap.html";

export default class MOAPViewPage extends Component<Props> {

    static navigationOptions = {
        title: 'MOAP Page',
    };


    render() {
        return (
            <View style={{flex: 1}}>
                <WebView nativeID={'nativoMoapAdView'} javaScriptEnabled={true}
                         domStorageEnabled={true} source={{uri: PUBLISHER_URL}} onLoad={() => this.placeAdInWebView()}/>
            </View>
        );
    }

    placeAdInWebView() {
        NativeModules.NativoRNSdk.placeAdInWebView(MOAP_SECTION_URL);
    }
}