import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PublisherCard from "../publisherTemplate/PublisherCard";
import NativeAdTemplate from "../adTemplates/NativeAdTemplate";
import VideoAdTemplate from "../adTemplates/NativeVideoAdTemplate";
import StandardDisplayAdTemplate from "../adTemplates/StandardDisplayAdTemplate";
import {NativoAd, NativoSDK} from "react-native-nativo-ads";
import * as constant from "./../util/AppConstants"

export default class ScrollViewPage extends Component {

    constructor(props, context) {
        super(props, context);
        this._nodes = new Map();
        NativoSDK.clearAdsInSection(constant.sampleSectionUrl);
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
                          onDisplayAdClick={this.displayClickOutURL}
                          onAdRemoved={this.removeNativoAd}
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
                          onDisplayAdClick={this.displayClickOutURL}
                          onAdRemoved={this.removeNativoAd}
                          style={styles.card}/>
                <PublisherCard/>
            </ScrollView>
        );
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