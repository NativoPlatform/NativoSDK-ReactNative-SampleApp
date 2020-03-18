import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PublisherCard from "../publisherTemplate/PublisherCard";
import NativeAdTemplate from "../adTemplates/NativeAdTemplate";
import VideoAdTemplate from "../adTemplates/NativeVideoAdTemplate";
import StandardDisplayAdTemplate from "../adTemplates/StandardDisplayAdTemplate";
import {NativoAd} from "react-native-nativo-ads";
import * as constant from "./../util/AppConstants"

export default class ScrollViewPage extends Component {

    constructor(props, context) {
        super(props, context);
        this._nodes = new Map();
    }

    static navigationOptions = {
        title: 'Scroll View Page',
    };

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    needsDisplayClickOutURL = (url) => {
        console.log("needsDisplayClickOutURL App.js ", url);
        this.props.navigation.navigate('ClickOutScreen', {
            url: url,
        })
    };

    displayLandingPage = (event) => {
        console.log("displayLandingPage App.js ", event);
        this.props.navigation.navigate('NativoLandingScreen', {
            sectionUrl: event.sectionUrl,
            adId: event.adId,
            containerHash: event.containerHash,
            adDescription: event.adDescription,
            adTitle: event.adTitle,
            adAuthorName: event.adAuthorName,
            adDate: event.adDate,
        })
    };

    removeNativoAd = (event) => {
        console.log("Remove me: " + event.index + " " + event.sectionUrl);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyItems: 'center'}}
                        nativeID={'publisherNativoAdContainer'}>
                <PublisherCard/>
                <PublisherCard/>
                <NativoAd {...this.props}
                          sectionUrl={constant.sampleSectionUrl}
                          index={100}
                          nativeAdTemplate={NativeAdTemplate}
                          videoAdTemplate={VideoAdTemplate}
                          standardDisplayAdTemplate={StandardDisplayAdTemplate}
                          onNativeAdClick={this.displayLandingPage}
                          onDisplayAdClick={this.needsDisplayClickOutURL}
                          onNeedsRemoveAd={this.removeNativoAd}
                          style={styles.card}/>
                <PublisherCard/>
                <PublisherCard/>
                <NativoAd {...this.props}
                          sectionUrl={constant.sampleSectionUrl}
                          index={200}
                          nativeAdTemplate={NativeAdTemplate}
                          videoAdTemplate={VideoAdTemplate}
                          standardDisplayAdTemplate={StandardDisplayAdTemplate}
                          onNativeAdClick={this.displayLandingPage}
                          onDisplayAdClick={this.needsDisplayClickOutURL}
                          onAdRemoved={this.removeNativoAd}
                          style={styles.card}/>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        width: 400,
        height: 300,
        padding: 10,
        margin: 10,
        elevation: 1
    }
});