import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default class HomePage extends Component<Props> {

    static navigationOptions = {
        title: 'Home Page',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button title={'StandAlone Ad Page'}
                            onPress={() => this.props.navigation.navigate('StandAloneAdScreen')}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'FlatList Ad Page'}
                            onPress={() => this.props.navigation.navigate('FlatListAdScreen')}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'Scroll Ad Page'}
                            onPress={() => this.props.navigation.navigate('ScrollAdScreen')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});