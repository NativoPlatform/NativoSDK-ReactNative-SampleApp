import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./../util/Styles"
import {GetFormattedDate} from "../util/AppUtils";

const NativeAdTemplate = (props) => {
    const dateFormatted = GetFormattedDate(props.adDate);
    console.log("extraTemplateProps: "+JSON.stringify(props.extraTemplateProps));
    return (
        <View style={[styles.card, styles.sponsored]}>
            <View style={styles.textRow}>
                <Text style={{color: '#1A1AFF', fontWeight: 'bold', flex: 1}}>Sponsored Content</Text>
                <Image nativeID={'adChoicesImage'} style={{height: 20, width: 20}}/>
            </View>
            <Image style={styles.media}
                   nativeID={'adImage'}/>
            <View style={styles.descriptionRegion}>
                <Text editable={false} nativeID={'adTitle'}
                      style={styles.title}>{props.adTitle}</Text>
                <Text numberOfLines={2} multiline={true} editable={false} nativeID={'adDescription'}
                      style={styles.description}>{props.adDescription} </Text>
            </View>
            <View style={styles.textRow}>
                <Image nativeID={'adAuthorImage'} style={{height: 30, width: 30}}/>
                <Text nativeID={'adAuthorName'}>{props.adAuthorName}</Text>
                <Text nativeID={'adDate'} style={styles.date}>{dateFormatted}</Text>
            </View>
        </View>
    );
};

export default NativeAdTemplate;
