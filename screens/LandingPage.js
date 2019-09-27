import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, requireNativeComponent} from 'react-native';
import {WebView} from 'react-native-webview';

const NativoLandingPageContainer = requireNativeComponent("NativoLandingPageContainer")

export class LandingPage extends Component {

    componentDidMount(): void {
        const {navigation} = this.props;
        console.log("landing page values : " + navigation.getParam('sectionUrl', 'NO-ID'));
        console.log("landing page values : " + navigation.getParam('adId', 'NO-ID'));
        console.log("landing page values : " + navigation.getParam('containerHash', 'NO-ID'));
    }

    static navigationOptions = {
        title: 'Landing Page',
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <NativoLandingPageContainer injectLandingPage={{
                    'url': navigation.getParam('sectionUrl', 'NO-ID'),
                    'containerHash': navigation.getParam('containerHash'),
                    'adId': navigation.getParam('adId')
                }}
                                            style={{width: '100%', height: '100%'}}>
                    <View nativeID={'nativoAdWebViewContainer'} style={{width: '100%', height: '100%'}}>
                        <WebView nativeID={'nativoAdWebView'}
                                 style={{width: '100%', height: '100%'}}/>
                    </View>
                </NativoLandingPageContainer>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
export default LandingPage;