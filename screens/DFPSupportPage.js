import React, {Component} from 'react';
import {StyleSheet, View, NativeModules, FlatList} from 'react-native';

import NativeAdTemplate from "../adTemplates/NativeAdTemplate";
import NativeVideoAdTemplate from "../adTemplates/NativeVideoAdTemplate";
import StandardDisplayAdTemplate from "../adTemplates/StandardDisplayAdTemplate";
import {NativoAd, NativoSDK} from "react-native-nativo-ads"
import * as constant from "../util/AppConstants"
import PublisherCard from "../publisherTemplate/PublisherCard";

let DFPInitializer = NativeModules.DFPInitializer;

export default class DFPSupportPage extends Component {

    constructor(props) {
        super(props);
        this._nodes = new Map();
        let data = [
            {key: 1},
            {key: 2},
            {key: 3},
            {key: 4},
            {key: 5},
            {key: 6},
            {key: 7},
            {key: 8},
            {key: 9},
            {key: 10},
        ];
        this.state = {data: data};
    }

    componentDidMount() {
        NativoSDK.clearAdsInSection(constant.dfpTestSectionUrl);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    static navigationOptions = {
        title: 'DFP Ad Page',
    };

    displayClickOutURL = (event) => {
        this.props.navigation.navigate('ClickOutScreen', {
            url: event.url,
        })
    }

    displayLandingPage = (event) => {
        this.props.navigation.navigate('NativoLandingScreen', event);
    };

    removeNativoAd = (event) => {
        console.log("Remove me: " + event.index + " " + event.sectionUrl);
    }

    callDFPLoadBanner = (index) => {
        console.log("callDFPLoadBanner me: " + index);
        DFPInitializer.loadBanner(index);
    }

    render() {
        // let dfpSectionUrl = "https://app.bloomberg.com";
        let dfpSectionUrl = "http://www.nativo.net/mobiledfptest";
        let dfpVersion = Platform.OS === 'ios' ? '7.61.0' : '19.1.0';
        return (
            <View style={styles.container}>
                <FlatList nativeID={'publisherNativoAdContainer'}
                          data={this.state.data}
                          renderItem={({item}) => {
                              if (item.key % 2 === 1) {
                                  this.callDFPLoadBanner(item.key)
                                  return <NativoAd {...this.props}
                                                   sectionUrl={dfpSectionUrl}
                                                   index={item.key}
                                                   nativeAdTemplate={NativeAdTemplate}
                                                   videoAdTemplate={NativeVideoAdTemplate}
                                                   standardDisplayAdTemplate={StandardDisplayAdTemplate}
                                                   onNativeAdClick={this.displayLandingPage}
                                                   onDisplayAdClick={this.displayClickOutURL}
                                                   onAdRemoved={this.onNativoAdRemoved}
                                                   enableDFPVersion={dfpVersion}/>
                              } else {
                                  return <PublisherCard/>
                              }
                          }}
                          keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        width: '95%',
        height: 300,
        padding: 10,
        margin: 10,
        elevation: 1
    }
});
