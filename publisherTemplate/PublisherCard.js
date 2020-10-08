import {Image, StyleSheet, Text, View, Dimensions} from "react-native";
import React from "react";


const PublisherCard = () => {
    let curDate = new Date();
    return (
        <View style={styles.card}>
            <Image style={styles.cardImage} source={require('../img/newsimage.jpeg')}/>
            <View>
                <Text style={{
                    textAlign: 'right',
                    height: 30
                }}>{curDate.getDate() + '/' + curDate.getMonth() + '/' + curDate.getFullYear()} </Text>
                <Text nativeID={'articleTitle'}
                      style={{textAlign: 'center', fontWeight: 'bold', height: 35}}>{'Publisher Article Title'}</Text>
                <Text numberOfLines={2} multiline={true} editable={false} nativeID={'articleDescription'}
                      style={{textAlign: 'center', height: 50}}>{'Publisher Article Description'} </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 1,
        flex: 1,
        height: 300,
        padding: 5,
        marginBottom: 5,
        elevation: 1,
        width: Dimensions.get('window').width,
    },
    cardImage: {
        height: 200,
        alignSelf: 'center'
    },
});

export default PublisherCard
