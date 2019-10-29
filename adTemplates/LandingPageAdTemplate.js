import React from 'react'
import {WebView} from "react-native-webview";
import {View} from "react-native";

const LandingPageAdTemplate = (props) => {
    return (
        <View nativeID={'nativoAdWebViewContainer'} style={{flex: 1}}>
            <WebView nativeID={'nativoAdWebView'} javaScriptEnabled={true}
                     domStorageEnabled={true}/>
        </View>
    );
};

export default LandingPageAdTemplate;
