import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from "react-native-webview";

export default class ClickOutViewPage extends Component<props> {

    static navigationOptions = {
        title: 'Click Out Page',
    };

    render() {
        const {navigation} = this.props;
        const url = navigation.getParam('url', '#');
        return (
            <View style={{flex: 1}}>
                <WebView javaScriptEnabled={true}
                         domStorageEnabled={true} source={{uri: url}} startInLoadingState={true}
                         renderLoading={this.renderLoading}/>
            </View>
        );
    }
}