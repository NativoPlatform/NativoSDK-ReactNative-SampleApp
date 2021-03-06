import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {NativoVideo} from "react-native-nativo-ads";
import styles from "./../util/Styles"
import {GetFormattedDate} from "../util/AppUtils";

const NativeVideoAdTemplate = (props) => {
    const dateFormatted = GetFormattedDate(props.adDate);
    console.log("extraTemplateProps: "+JSON.stringify(props.extraTemplateProps));
    return (
        <View style={[styles.card, styles.sponsored]}>
            <View style={styles.textRow}>
                <Text style={{color: '#1A1AFF', fontWeight: 'bold', flex: 1}}>Sponsored Content</Text>
                <Image nativeID={'adChoicesImage'} style={{height: 20, width: 20}}/>
            </View>
            <View style={styles.media}>
                <NativoVideo style={styles.media} />
            </View>
            <View style={styles.descriptionRegion}>
                <Text nativeID={'adTitle'} style={styles.title}>{props.adTitle}</Text>
                <Text numberOfLines={2} multiline={true} nativeID={'adDescription'}
                      style={styles.description}>{props.adDescription}</Text>
            </View>
            <View style={styles.textRow}>
                <Image nativeID={'adAuthorImage'} style={{height: 30, width: 30}}/>
                <Text nativeID={'adAuthorName'}>{props.adAuthorName}</Text>
                <Text nativeID={'adDate'} style={styles.date}>{dateFormatted}</Text>
            </View>
        </View>
    );
}

export default NativeVideoAdTemplate;
