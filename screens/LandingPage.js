import React, {Component} from 'react';
import {findNodeHandle, requireNativeComponent, StyleSheet, UIManager, View} from 'react-native';
import LandingPageTemplate from "../components/LandingPageTemplate";

const NativoLandingPageContainer = requireNativeComponent("NativoLandingPageContainer")

export class LandingPage extends Component {

    componentDidMount(): void {

        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this.refs.landingContainer),
            UIManager.NativoLandingPageContainer.Commands.injectAd, []);
    }

    static navigationOptions = {
        title: 'Landing Page',
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <NativoLandingPageContainer ref="landingContainer" injectLandingPage={{
                    'url': navigation.getParam('sectionUrl', 'NO-ID'),
                    'containerHash': navigation.getParam('containerHash'),
                    'adId': navigation.getParam('adId')
                }} style={{width: '100%', height: '100%'}}>
                    <LandingPageTemplate/>
                </NativoLandingPageContainer>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default LandingPage;