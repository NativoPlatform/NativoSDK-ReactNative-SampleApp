import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PublisherCard from "../publisherTemplate/PublisherCard";
import NativeAdTemplate from "../adTemplates/NativeAdTemplate";
import NativeVideoAdTemplate from "../adTemplates/NativeVideoAdTemplate";
import StandardDisplayAdTemplate from "../adTemplates/StandardDisplayAdTemplate";
import LandingPageAdTemplate from "../adTemplates/LandingPageAdTemplate";
import NativoAdComponent from "../components/NativoAdComponent";

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

    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyItems: 'center'}}
                        nativeID={'publisherNativoAdContainer'}>
                <PublisherCard/>
                <PublisherCard/>
                <NativoAdComponent ref={c => this._nodes.set(100, c)} {...this.props} sectionUrl={sampleSectionUrl}
                                   index={100} nativeAdTemplate={NativeAdTemplate}
                                   nativeVideoAdTemplate={NativeVideoAdTemplate}
                                   standardDisplayAdTemplate={StandardDisplayAdTemplate}
                                   landingPageAdTemplate={LandingPageAdTemplate}/>
                <PublisherCard/>
                <PublisherCard/>
                <NativoAdComponent ref={c => this._nodes.set(200, c)} {...this.props} sectionUrl={sampleSectionUrl}
                                   index={200} nativeAdTemplate={NativeAdTemplate}
                                   nativeVideoAdTemplate={NativeVideoAdTemplate}
                                   standardDisplayAdTemplate={StandardDisplayAdTemplate}
                                   landingPageAdTemplate={LandingPageAdTemplate}/>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});