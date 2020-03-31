import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import NativeAdTemplate from "./adTemplates/NativeAdTemplate";
import NativeVideoAdTemplate from "./adTemplates/NativeVideoAdTemplate";
import StandardDisplayAdTemplate from "./adTemplates/StandardDisplayAdTemplate";
import PublisherCard from "./publisherTemplate/PublisherCard";
import {NativoAd, NativoSDK} from "react-native-nativo-ads"
import * as constant from "./util/AppConstants"


export class App extends Component {

    constructor(props) {
        super(props);
        this._nodes = new Map();
        NativoSDK.clearAdsInSection(constant.sampleSectionUrl);
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    static navigationOptions = {
        title: 'Nativo React Sample App',
    };

    needsDisplayClickOutURL = (event) => {
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

    render() {
        return (
            <View style={styles.container} nativeID={'publisherNativoAdContainer'}>
                <PublisherCard/>
                <NativoAd style={styles.card}
                          sectionUrl={constant.sampleSectionUrl}
                          index={10}
                          nativeAdTemplate={NativeAdTemplate}
                          videoAdTemplate={NativeVideoAdTemplate}
                          standardDisplayAdTemplate={StandardDisplayAdTemplate}
                          onNativeAdClick={this.displayLandingPage}
                          onDisplayAdClick={this.needsDisplayClickOutURL}
                          onAdRemoved={this.removeNativoAd}/>
            </View>
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

export default App;
