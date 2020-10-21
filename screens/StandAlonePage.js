import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import NativeAdTemplate from "../adTemplates/NativeAdTemplate";
import NativeVideoAdTemplate from "../adTemplates/NativeVideoAdTemplate";
import StandardDisplayAdTemplate from "../adTemplates/StandardDisplayAdTemplate";
import {NativoAd, NativoSDK} from "react-native-nativo-ads"
import * as constant from "../util/AppConstants"
import styles from "./../util/Styles"


export default class StandAlonePage extends Component {

    constructor(props) {
        super(props);
        this._nodes = new Map();
    }

    componentDidMount() {
        NativoSDK.clearAdsInSection(constant.sampleSectionUrl);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    static navigationOptions = {
        title: 'Standalone Ad Page',
    };

    displayClickOutURL = (event) => {
        this.props.navigation.navigate('ClickOutScreen', {
            url: event.url,
        })
    }

    displayLandingPage = (event) => {
        this.props.navigation.navigate('NativoLandingScreen', event);
    };

    adRemoved = (event) => {
        console.log("Remove me: " + event.index + " " + event.sectionUrl);
    }

    adRendered = (event) => {
        console.log("Ad has officially been rendered: " + event.index + " " + event.sectionUrl);
    }

    render() {
        return (
            <View style={{flex: 1}} nativeID={'publisherNativoAdContainer'}>
                <NativoAd sectionUrl={constant.sampleSectionUrl}
                          index={10}
                          nativeAdTemplate={NativeAdTemplate}
                          videoAdTemplate={NativeVideoAdTemplate}
                          onAdRendered={this.adRendered}
                          standardDisplayAdTemplate={StandardDisplayAdTemplate}
                          onNativeAdClick={this.displayLandingPage}
                          onDisplayAdClick={this.displayClickOutURL}
                          onAdRemoved={this.adRemoved}/>
            </View>
        );
    }
}
