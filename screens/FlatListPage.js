import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PublisherCard from "../publisherTemplate/PublisherCard";
import NativeAdTemplate from "../adTemplates/NativeAdTemplate";
import VideoAdTemplate from "../adTemplates/NativeVideoAdTemplate";
import StandardDisplayAdTemplate from "../adTemplates/StandardDisplayAdTemplate";
import { NativoSDK, NativoAd } from "react-native-nativo-ads";

let sampleSectionUrl = 'pub.com';

export default class FlatListPage extends Component {

    constructor(props) {
        super(props);
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
        this.state = { data : data };
    }

    static navigationOptions = {
        title: 'Flat List Page',
    };

    componentDidMount() {

    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {

    }

    needsDisplayClickOutURL = (event) => {
        console.log("needsDisplayClickOutURL ", event.url);
        this.props.navigation.navigate('ClickOutScreen', {
            url: event.url,
        });
    };

    displayLandingPage = (event) => {
        console.log("displayLandingPage ", event);
        this.props.navigation.navigate('NativoLandingScreen', event);
    };

    removeNativoAd = (event) => {
        console.log("Remove me: " + event.index + " "+ event.sectionUrl);
        let filteredData = this.state.data;
        filteredData.splice(event.index-1, 1);
        this.setState({ data : filteredData });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList nativeID={'publisherNativoAdContainer'}
                          data={this.state.data}
                          renderItem={({item}) =>
                              (item.key === 1 || item.key === 5) ?
                                  <NativoAd {...this.props}
                                    sectionUrl={sampleSectionUrl} 
                                    index={item.key}
                                    nativeAdTemplate={NativeAdTemplate}
                                    videoAdTemplate={VideoAdTemplate}
                                    standardDisplayAdTemplate={StandardDisplayAdTemplate}
                                    onNativeAdClick={this.displayLandingPage}
                                    onDisplayAdClick={this.needsDisplayClickOutURL}
                                    onNeedsRemoveAd={this.removeNativoAd} />
                                  :
                                  <PublisherCard/>
                          }
                          keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
});