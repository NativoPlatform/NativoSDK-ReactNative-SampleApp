import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import NativoAdComponent from "../components/NativoAdComponent";
import PublisherCard from "../components/PublisherCard";

let sampleSectionUrl = 'http://www.nativo.net/test/';

export default class FlatListPage extends Component {

    constructor(props) {
        super(props);
        this._nodes = new Map();
    }

    static navigationOptions = {
        title: 'Flat List Page',
    };

    componentDidMount() {
        this.checkNodes();
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        this.checkNodes();
    }

    checkNodes() {
        Array.from(this._nodes.values())
            .filter(node => node != null)
            .forEach(node => {
                node.prefetchAd();
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList nativeID={'publisherNativoAdContainer'}
                          data={[
                              {key: 1},
                              {key: 2},
                              {key: 3},
                              {key: 4},
                              {key: 5},
                              {key: 6},
                              {key: 7},
                              {key: 8},
                              {key: 9},
                              {key: 10},
                          ]}
                          renderItem={({item}) =>
                              (item.key === 1 || item.key === 5) ?
                                  <NativoAdComponent ref={c => this._nodes.set(item.key, c)} {...this.props}
                                                     sectionUrl={sampleSectionUrl} index={item.key}/>
                                  :
                                  <PublisherCard/>
                          }
                          keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
});