import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PublisherCard from "../publisherTemplate/PublisherCard";
import NativeAdTemplate from "../adTemplates/NativeAdTemplate";
import StandardDisplayAdTemplate from "../adTemplates/StandardDisplayAdTemplate";
import NativeVideoAdTemplate from "../adTemplates/NativeVideoAdTemplate";
import {NativoAd, NativoSDK} from "react-native-nativo-ads";
import * as constant from "./../util/AppConstants"
import styles from "./../util/Styles"


export default class ScrollViewPage extends Component {

    constructor(props, context) {
        super(props, context);
        this._nodes = new Map();
        NativoSDK.clearAdsInSection(constant.sampleSectionUrl);
        let data = [];
        for (let i = 0; i < 10; i++) {
            data.push(i);
        }
        this.fakeItem = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.state = {data: data};
    }

    static navigationOptions = {
        title: 'Scroll View Page',
    };

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    displayClickOutURL = (event) => {
        this.props.navigation.navigate('ClickOutScreen', event);
    };

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
        let extraTemplateProps = {backgroundColor: 'blue'};
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyItems: 'center'}}
                        nativeID={'publisherNativoAdContainer'}>
                {
                    this.state.data.map((item, key) => (
                        item % 2 === 1 ?
                            <NativoAd key={key} style={[styles.card, styles.sponsored]}
                                      sectionUrl={constant.sampleSectionUrl}
                                      index={item}
                                      nativeAdTemplate={NativeAdTemplate}
                                      videoAdTemplate={NativeVideoAdTemplate}
                                      onAdRendered={this.adRendered}
                                      standardDisplayAdTemplate={StandardDisplayAdTemplate}
                                      onNativeAdClick={this.displayLandingPage}
                                      onDisplayAdClick={this.displayClickOutURL}
                                      onAdRemoved={this.adRemoved}
                                      extraTemplateProps={extraTemplateProps}/>
                            :
                            <PublisherCard key={key} style={styles.card}/>
                    ))
                }
            </ScrollView>
        );
    }

}
