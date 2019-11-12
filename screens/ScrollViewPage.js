import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PublisherCard from "../publisherTemplate/PublisherCard";
import NativeAdTemplate from "../adTemplates/NativeAdTemplate";
import NativeVideoAdTemplate from "../adTemplates/NativeVideoAdTemplate";
import StandardDisplayAdTemplate from "../adTemplates/StandardDisplayAdTemplate";
import LandingPageAdTemplate from "../adTemplates/LandingPageAdTemplate";
import NativoAd from "react-native-nativo-sdk-alpha.1/NativoAd";

let sampleSectionUrl = 'http://www.nativo.net/test/'
export default class ScrollViewPage extends Component<Props> {

    constructor(props: P, context: any) {
        super(props, context);
        this._nodes = new Map();
    }

    static navigationOptions = {
        title: 'Scroll View Page',
    };

    componentDidMount(): void {
        this.checkNodes();
    }

    componentDidUpdate() {
        this.checkNodes();
    }

    checkNodes() {
        Array.from(this._nodes.values())
            .filter(node => node != null)
            .forEach(node => {
                node.prefetchAd();
            });
    }

    needsDisplayClickOutURL = (url) => {
        console.log("needsDisplayClickOutURL App.js ", url);
        this.props.navigation.navigate('ClickOutScreen', {
            url: url,
        })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyItems: 'center'}}
                        nativeID={'publisherNativoAdContainer'}>
                <PublisherCard/>
                <PublisherCard/>
                <NativoAd ref={c => this._nodes.set(100, c)} {...this.props} sectionUrl={sampleSectionUrl}
                          index={100} nativeAdTemplate={NativeAdTemplate}
                          nativeVideoAdTemplate={NativeVideoAdTemplate}
                          standardDisplayAdTemplate={StandardDisplayAdTemplate}
                          landingPageAdTemplate={LandingPageAdTemplate}
                          clickOutUrlCallback={this.needsDisplayClickOutURL}/>
                <PublisherCard/>
                <PublisherCard/>
                <NativoAd ref={c => this._nodes.set(200, c)} {...this.props} sectionUrl={sampleSectionUrl}
                          index={200} nativeAdTemplate={NativeAdTemplate}
                          nativeVideoAdTemplate={NativeVideoAdTemplate}
                          standardDisplayAdTemplate={StandardDisplayAdTemplate}
                          landingPageAdTemplate={LandingPageAdTemplate}
                          clickOutUrlCallback={this.needsDisplayClickOutURL}/>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});