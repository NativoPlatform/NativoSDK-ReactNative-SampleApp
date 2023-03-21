import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        width: (Dimensions.get('window').width-30),
        elevation: 1
    },
    sponsored: {
        borderWidth: 2,
        borderColor: '#23c9f5'
    },
    media: {
        width: '100%',
        height: 150,
    },
    descriptionRegion: {
        marginTop: 10,
    },
    title: {
        textAlign: 'left', 
        fontWeight: 'bold', 
    },
    description: {
        textAlign: 'left', 
    },
    textRow: {
        alignItems: 'center',
    },
    date: {
        textAlign: 'right', 
    }
});
