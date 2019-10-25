import React, {Component} from 'react';
import {findNodeHandle, requireNativeComponent, StyleSheet, UIManager, View} from 'react-native';

const NativoLandingPageContainer = requireNativeComponent("NativoLandingPageContainer")

export class NativoLandingPageComponent extends Component {

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
        const LandingPageAdTemplate = navigation.getParam('landingPageAdTemplate', 'NO-ID')
        return (
            <View style={styles.container}>
                <NativoLandingPageContainer ref="landingContainer" injectLandingPage={{
                    'url': navigation.getParam('sectionUrl', 'NO-ID'),
                    'containerHash': navigation.getParam('containerHash'),
                    'adId': navigation.getParam('adId')
                }} style={{width: '100%', height: '100%'}}>
                    <LandingPageAdTemplate/>
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
export default NativoLandingPageComponent;