import React from 'react'
import {WebView} from "react-native-webview";
import {View} from "react-native";

const LandingPageAdTemplate = (props) => {
    return (
        <View nativeID={'nativoAdWebViewContainer'} style={{width: '100%', height: '100%'}}>
            <WebView nativeID={'nativoAdWebView'}
                     style={{width: '100%', height: '100%'}}/>
        </View>
    );
};

export default LandingPageAdTemplate;
