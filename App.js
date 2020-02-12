import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import NativeAdTemplate from "./adTemplates/NativeAdTemplate";
import NativeVideoAdTemplate from "./adTemplates/NativeVideoAdTemplate";
import StandardDisplayAdTemplate from "./adTemplates/StandardDisplayAdTemplate";
import PublisherCard from "./publisherTemplate/PublisherCard";
import { NativoSDK, NativoAd } from "react-native-nativo-ads"

var sampleSectionUrl = 'http://www.nativo.net/test/';

type Props = {};

export class App extends Component<Props> {

    constructor(props) {
        super(props);
        this._nodes = new Map();
    }

    componentDidMount(): void {
        // NativoSDK.prefetchAdForSection(sampleSectionUrl, 10);
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        // NativoSDK.prefetchAdForSection(sampleSectionUrl, 10);
    }

    static navigationOptions = {
        title: 'Nativo React Sample App',
    };

    needsDisplayClickOutURL = (url) => {
        console.log("needsDisplayClickOutURL App.js ", url);
        this.props.navigation.navigate('ClickOutScreen', {
            url: url,
        })
    }

    displayLandingPage = (event) => {
        console.log("displayLandingPage App.js ", event);
        this.props.navigation.navigate('NativoLandingScreen', {
            sectionUrl: event.sectionUrl,
            adId: event.adId,
            index: event.adId,
            containerHash: event.containerHash,
            adDescription: event.adDescription,
            title: event.adTitle,
            authorName: event.adAuthorName,
            adDate: event.adDate,
            authorImgUrl: event.adAuthorUrl
        })
    };

    removeNativoAd = (event) => {
        console.log("Remove me: " + event.index + " "+ event.sectionUrl);
        // let filteredData = this.state.data;
        // filteredData.splice(event.index, 1);
        // this.setState({ data : filteredData });
    }

    render() {
        const asd = NativeAdTemplate;
        return (
            <View style={styles.container} nativeID={'publisherNativoAdContainer'}>
                <PublisherCard/>
                <NativoAd sectionUrl={sampleSectionUrl}
                          index={10}
                          nativeAdTemplate={asd }
                          videoAdTemplate={NativeVideoAdTemplate}
                          standardDisplayAdTemplate={StandardDisplayAdTemplate }
                          onNativeAdClick={this.displayLandingPage}
                          onDisplayAdClick={this.needsDisplayClickOutURL}
                          onNeedsRemoveAd={this.removeNativoAd} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default App;
