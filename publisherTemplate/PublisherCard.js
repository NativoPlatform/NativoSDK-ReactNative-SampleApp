import {Image, Text, View} from "react-native";
import React from "react";
import styles from "./../util/Styles"


const PublisherCard = (props) => {
    let curDate = new Date();
    return (
        <View {...props} >
            <Image style={styles.media} source={require('../img/newsimage.jpg')}/>
            <View style={[styles.descriptionRegion, {flexDirection:'row'}]}>
                <View style={{flex:3}}>
                    <Text nativeID={'articleTitle'}
                        style={styles.title}>{'Publisher Article Title'}</Text>
                    <Text numberOfLines={2} multiline={true} editable={false} nativeID={'articleDescription'}
                        style={styles.description}>{'Publisher Article Description'} </Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.date}>
                        {curDate.getDate() + '/' + curDate.getMonth() + '/' + curDate.getFullYear()}</Text>
                </View>
            </View>
        </View>
    );
};

export default PublisherCard;
