import React, {Component} from 'react'
import {WebView} from "react-native-webview";
import {View} from "react-native";

export default class LandingPageTemplate extends Component {
    render() {
        return (
            <View nativeID={'nativoAdWebViewContainer'} style={{width: '100%', height: '100%'}}>
                <WebView nativeID={'nativoAdWebView'}
                         style={{width: '100%', height: '100%'}}/>
            </View>
        );
    };
}