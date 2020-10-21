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
        let data = [];
        for (let i = 0; i < 40; i++) {
            data.push({key: i});
        }
        this.state = {data: data};
        for (let dfpIndex = 1; dfpIndex < 40; dfpIndex+=5) {
            this.callDFPLoadBanner(dfpIndex);
        }
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
        console.log("Display landing page");
        this.props.navigation.navigate('NativoLandingScreen', event);
    }

    callDFPLoadBanner = (index) => {
        DFPInitializer.loadBanner(index);
    }
    onAdRendered = (event) => {
        console.log("Ad has been rendered: " + event.index + " " + event.sectionUrl);
    }

    onNativoAdRemoved = (event) => {
        console.log("Removed ad: " + event.index + " " + event.sectionUrl);
    }

    render() {
        // let dfpSectionUrl = "https://app.bloomberg.com";
        let dfpSectionUrl = "http://www.nativo.net/mobiledfptest";
        let dfpVersion = Platform.OS === 'ios' ? '7.61.0' : '19.1.0';
        let extraTemplateProps = {backgroundColor: 'blue'};
        return (
            <View style={styles.container}>
                <FlatList nativeID={'publisherNativoAdContainer'}
                          data={this.state.data}
                          windowSize={10}
                          renderItem={({item}) => {
                              if (item.key % 5 === 1) {
                                  return <NativoAd sectionUrl={dfpSectionUrl}
                                                   index={item.key}
                                                   nativeAdTemplate={NativeAdTemplate}
                                                   videoAdTemplate={NativeVideoAdTemplate}
                                                   onAdRendered={this.onAdRendered}
                                                   standardDisplayAdTemplate={StandardDisplayAdTemplate}
                                                   onNativeAdClick={this.displayLandingPage}
                                                   onDisplayAdClick={this.displayClickOutURL}
                                                   onAdRemoved={this.onNativoAdRemoved}
                                                   extraTemplateProps={extraTemplateProps}
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
