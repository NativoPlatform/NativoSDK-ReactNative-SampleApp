/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FlatListPage from "./screens/FlatListPage";
import HomePage from "./screens/HomePage";
import ScrollViewPage from "./screens/ScrollViewPage";
import LandingViewPage from "./screens/LandingViewPage";
import MOAPViewPage from "./screens/MOAPViewPage";
import ClickOutViewPage from "./screens/ClickOutViewPage";

const MainNavigator = createStackNavigator({
    HomePage: {screen: HomePage},
    StandAloneAdScreen: {screen: App},
    FlatListAdScreen: {screen: FlatListPage},
    ScrollAdScreen: {screen: ScrollViewPage},
    NativoLandingScreen: {screen: LandingViewPage},
    MOAPAdScreen: {screen: MOAPViewPage},
    ClickOutScreen: {screen: ClickOutViewPage}
});

const AppNavigation = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => AppNavigation);
