import React, {Component} from 'react';
import {StyleSheet, View, NativeModules, FlatList} from 'react-native';

import NativeAdTemplate from "../adTemplates/NativeAdTemplate";
import NativeVideoAdTemplate from "../adTemplates/NativeVideoAdTemplate";
import StandardDisplayAdTemplate from "../adTemplates/StandardDisplayAdTemplate";
import {NativoAd, NativoSDK} from "react-native-nativo-ads"
import * as constant from "../util/AppConstants"
import PublisherCard from "../publisherTemplate/PublisherCard";
import styles from "../util/Styles"

let GAMInitializer = NativeModules.GAMInitializer;

export default class GAMSupportPage extends Component {

    constructor(props) {
        super(props);
        this._nodes = new Map();
        let data = [];
        for (let i = 0; i < 40; i++) {
            data.push({key: i});
        }
        this.state = {data: data};
        for (let gamIndex = 1; gamIndex < 40; gamIndex+=5) {
            this.callGAMLoadBanner(gamIndex);
        }
    }

    componentDidMount() {
        NativoSDK.clearAdsInSection(constant.gamTestSectionUrl);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    static navigationOptions = {
        title: 'GAM Ad Page',
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

    callGAMLoadBanner = (index) => {
        GAMInitializer.loadBanner(index);
    }
    onAdRendered = (event) => {
        console.log("Ad has been rendered: " + event.index + " " + event.sectionUrl);
    }

    onNativoAdRemoved = (event) => {
        console.log("Removed ad: " + event.index + " " + event.sectionUrl);
    }

    render() {
        let gamSectionUrl = "http://www.nativo.net/mobiledfptest";
        let gamVersion = Platform.OS === 'ios' ? '7.61.0' : '19.1.0';
        let extraTemplateProps = {backgroundColor: 'blue'};
        return (
            <View style={{flex:1}}>
                <FlatList nativeID={'publisherNativoAdContainer'}
                          data={this.state.data}
                          windowSize={10}
                          renderItem={({item}) => {
                              if (item.key % 5 === 1) {
                                  return <NativoAd sectionUrl={gamSectionUrl}
                                                   index={item.key}
                                                   nativeAdTemplate={NativeAdTemplate}
                                                   videoAdTemplate={NativeVideoAdTemplate}
                                                   onAdRendered={this.onAdRendered}
                                                   standardDisplayAdTemplate={StandardDisplayAdTemplate}
                                                   onNativeAdClick={this.displayLandingPage}
                                                   onDisplayAdClick={this.displayClickOutURL}
                                                   onAdRemoved={this.onNativoAdRemoved}
                                                   extraTemplateProps={extraTemplateProps}
                                                   enableGAMVersion={gamVersion}/>
                              } else {
                                  return <PublisherCard style={styles.card}/>
                              }
                          }}
                          keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}