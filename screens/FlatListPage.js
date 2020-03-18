import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PublisherCard from "../publisherTemplate/PublisherCard";
import NativeAdTemplate from "../adTemplates/NativeAdTemplate";
import StandardDisplayAdTemplate from "../adTemplates/StandardDisplayAdTemplate";
import {NativoAd} from "react-native-nativo-ads";
import NativeVideoAdTemplate from "../adTemplates/NativeVideoAdTemplate";
import * as constant from "./../util/AppConstants"

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
        this.state = {data: data};
    }

    static navigationOptions = {
        title: 'Flat List Page',
    };

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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

    onNativoAdRemoved = (event) => {
        console.log("Remove me: " + event.index + " " + event.sectionUrl);
        let filteredData = this.state.data;
        filteredData.splice(event.index - 1, 1);
        this.setState({data: filteredData});
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList nativeID={'publisherNativoAdContainer'}
                          data={this.state.data}
                          renderItem={({item}) =>
                              (item.key === 1 || item.key === 5) ?
                                  <NativoAd {...this.props}
                                            sectionUrl={constant.sampleSectionUrl}
                                            index={item.key}
                                            nativeAdTemplate={NativeAdTemplate}
                                            videoAdTemplate={NativeVideoAdTemplate}
                                            standardDisplayAdTemplate={StandardDisplayAdTemplate}
                                            onNativeAdClick={this.displayLandingPage}
                                            onDisplayAdClick={this.needsDisplayClickOutURL}
                                            onAdRemoved={this.onNativoAdRemoved}/>
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