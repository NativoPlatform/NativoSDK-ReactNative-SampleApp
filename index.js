/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingPage from "./screens/LandingPage";
import FlatListPage from "./screens/FlatListPage";
import HomePage from "./screens/HomePage";
import ScrollViewPage from "./screens/ScrollViewPage";

const MainNavigator = createStackNavigator({
    HomePage: {screen: HomePage},
    StandAloneAdScreen: {screen: App},
    FlatListAdScreen: {screen: FlatListPage},
    ScrollAdScreen: {screen: ScrollViewPage},
    LandingScreen: {screen: LandingPage},
});

const AppNavigation = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => AppNavigation);
