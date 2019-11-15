import React from 'react'
import {WebView} from "react-native-webview";
import {View, Text, Image, StyleSheet} from "react-native";

const LandingPageAdTemplate = (props) => {
    let p = props.navigation.state.params;
    let date = p.adDate;
    let adTitle = p.adTitle;
    let authorName = p.adAuthorName;
    return (
        <View nativeID={'nativoAdWebViewContainer'} style={{flex: 1}}>
            <View style={styles.nativeCard}>
                <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>
                <View>
                    <Text nativeID={'articleDate'} style={{textAlign: 'right', height: 20}}>{date} </Text>
                    <Text editable={false} nativeID={'articleTitle'} numberOfLines={2} multiline={true}
                          style={{textAlign: 'center', fontWeight: 'bold', height: 15}}>{adTitle}</Text>
                </View>
                <View style={styles.textRow}>
                    <Image nativeID={'authorImage'} style={{height: 25, width: 50}}/>
                    <Text nativeID={'authorName'}>{authorName}</Text>
                </View>
            </View>
            <WebView nativeID={'nativoAdWebView'} javaScriptEnabled={true}
                     domStorageEnabled={true} scalesPageToFit={false} startInLoadingState={true}
                     renderLoading={this.renderLoading}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nativeCard: {
        width: 400,
        height: 100,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3'
    },
    textRow: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding: 10
    },

});

export default LandingPageAdTemplate;
