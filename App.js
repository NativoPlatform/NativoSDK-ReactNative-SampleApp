import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import NativoAdComponent from "./components/NativoAdComponent";

var sampleSectionUrl = 'http://www.nativo.net/test/'

type Props = {};

export class App extends Component<Props> {

    constructor(props) {
        super(props);
        this._nodes = new Map();
    }

    componentDidMount(): void {
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

    static navigationOptions = {
        title: 'Nativo React Sample App',
    };

    render() {
        return (
            <View style={styles.container}>
                <NativoAdComponent ref={c => this._nodes.set(10, c)} {...this.props} sectionUrl={sampleSectionUrl}
                                   index={10}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default App;
