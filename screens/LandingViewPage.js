import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Share} from "react-native";
import {NativoWebContent, NativoSDK} from "react-native-nativo-ads";

export default class LandingViewPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            height:700
        };
    }

    static navigationOptions = {
        title: 'LandingPage',
    };

    shareArticle = async () => {
        try {
            const result = await Share.share({
                message: this.props.navigation.getParam('adTitle'),
            });
            if (result.action === Share.sharedAction) {
                NativoSDK.trackShareActionForUrl(this.props.navigation.getParam('adShareUrl'));
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    render() {
        const { navigation } = this.props;
        const index = navigation.getParam('index');
        const sectionUrl = navigation.getParam('sectionUrl');
        const containerHash = navigation.getParam('containerHash');
        const title = navigation.getParam('adTitle');
        const authorImgUrl = navigation.getParam('adAuthorImgUrl');
        const authorName = navigation.getParam('adAuthorName');
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', width: '100%'}}>
                    <View style={styles.authorView}>
                        <Image source={{ uri: authorImgUrl }} style={styles.authorImage} resizeMode="contain"/>
                        <Text style={styles.authorName}>{authorName}</Text>
                    </View>
                    <TouchableOpacity title="Share Btn" onPress={this.shareArticle}>
                        <Image source={require('../img/share2.png')} style={styles.shareImg}></Image>
                    </TouchableOpacity>
                </View>
                
                <NativoWebContent
                    style={{height:this.state.height}}
                    index={index}
                    sectionUrl={sectionUrl}
                    containerHash={containerHash}
                    onClickExternalLink={(event)=> {
                        navigation.navigate("ClickOutScreen", { url: event.url });
                    }}
                    onFinishLoading={(event)=>{
                        if (event.error) {
                            console.log("There was an error: " + JSON.stringify(event.error));
                        } else {
                            this.setState({height: event.contentHeight});
                        }
                    }} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontSize: 30,
        margin: 10
    },
    authorName: {
        fontSize: 18
    },
    authorImage: {
        width: 50,
        height: 50
    },
    authorView: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    shareImg: {
        width: 25,
        height: 25,
        marginRight: 20
    }
});