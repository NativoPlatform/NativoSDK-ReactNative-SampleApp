import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Button} from "react-native";
import {NativoWebContent} from "react-native-nativo-ads";

export default class LandingViewPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.webContentRef = React.createRef();
        this.state = {
            height:700
        };
    }

    static navigationOptions = {
        title: 'LandingPage',
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
                <View style={styles.authorView}>
                    <Image source={{ uri: authorImgUrl }} style={styles.authorImage} resizeMode="contain"/>
                    <Text style={styles.authorName}>{authorName}</Text>
                    <Button title="Share Btn" onPress={() => this.webContentRef.current.trackDidShare()}>Share</Button>
                </View>
                <NativoWebContent
                    ref={this.webContentRef}
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
                            console.log("-- Share: "+JSON.stringify(event.shareUrl));
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
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
});