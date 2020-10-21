import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PublisherCard from "../publisherTemplate/PublisherCard";
import NativeAdTemplate from "../adTemplates/NativeAdTemplate";
import StandardDisplayAdTemplate from "../adTemplates/StandardDisplayAdTemplate";
import {NativoAd, NativoSDK} from "react-native-nativo-ads";
import NativeVideoAdTemplate from "../adTemplates/NativeVideoAdTemplate";
import * as constant from "./../util/AppConstants"
import commonStyles from "./../util/Styles"

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
        NativoSDK.clearAdsInSection(constant.sampleSectionUrl);
    }

    static navigationOptions = {
        title: 'Flat List Page',
    };

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    displayClickOutURL = (event) => {
        console.log("needsDisplayClickOutURL ", event.url);
        this.props.navigation.navigate('ClickOutScreen', {
            url: event.url,
        });
    };

    displayLandingPage = (event) => {
        this.props.navigation.navigate('NativoLandingScreen', event);
    };

    adRemoved = (event) => {
        console.log("Remove me: " + event.index + " " + event.sectionUrl);
        let filteredData = this.state.data;
        filteredData.splice(event.index - 1, 1);
        this.setState({data: filteredData});
    }

    adRendered = (event) => {
        console.log("Ad has officially been rendered: " + event.index + " " + event.sectionUrl);
    }

    render() {
        let extraTemplateProps = {backgroundColor: 'blue'};
        return (
            <View style={styles.container}>
                <FlatList nativeID={'publisherNativoAdContainer'}
                          data={this.state.data}
                          renderItem={({item}) =>
                              (item.key % 2 === 1) ?
                                  <NativoAd sectionUrl={constant.sampleSectionUrl}
                                            index={item.key}
                                            nativeAdTemplate={NativeAdTemplate}
                                            videoAdTemplate={NativeVideoAdTemplate}
                                            onAdRendered={this.adRendered}
                                            standardDisplayAdTemplate={StandardDisplayAdTemplate}
                                            onNativeAdClick={this.displayLandingPage}
                                            onDisplayAdClick={this.displayClickOutURL}
                                            onAdRemoved={this.adRemoved}
                                            extraTemplateProps={extraTemplateProps}/>
                                  :
                                  <PublisherCard style={commonStyles.card} />
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
        alignItems: 'center',
        alignContent: 'center'
    }
});
