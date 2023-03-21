import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./../util/Styles"
import {GetFormattedDate} from "../util/AppUtils";

const NativeAdTemplate = (props) => {
    console.log(JSON.stringify)
    console.log("extraTemplateProps: "+JSON.stringify(props.extraTemplateProps));
    return (
        <View style={[styles.card, styles.sponsored]}>
            <View style={styles.textRow}>
                <Text style={{color: '#1A1AFF', fontWeight: 'bold'}}>Sponsored Content</Text>
                <Image nativeID={'adChoicesImage'} style={{height: 20, width: 20}}/>
            </View>
            <Image style={styles.media} nativeID={'adImage'} />
            <View style={styles.descriptionRegion}>
                <Text editable={false} nativeID={'adTitle'}
                      style={styles.title}>{props.adTitle}</Text>
                <Text nativeID={'adDescription'}>{props.adDescription} </Text>
            </View>
            <View style={styles.textRow}>
                <Image style={{width:40, height:30}} nativeID={'adAuthorImage'}/>
                <Text nativeID={'adAuthorName'}>{props.adAuthorName}</Text>
            </View>
        </View>
    );
};

export default NativeAdTemplate;
