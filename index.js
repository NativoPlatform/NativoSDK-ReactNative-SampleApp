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
import {NativoLandingPageComponent} from "react-native-nativo-sdk-alpha.1/NativoLandingPageComponent";
import MOAPViewPage from "./screens/MOAPViewPage";

const MainNavigator = createStackNavigator({
    HomePage: {screen: HomePage},
    StandAloneAdScreen: {screen: App},
    FlatListAdScreen: {screen: FlatListPage},
    ScrollAdScreen: {screen: ScrollViewPage},
    LandingScreen: {screen: NativoLandingPageComponent},
    MOAPAdScreen: {screen: MOAPViewPage}
});

const AppNavigation = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => AppNavigation);
