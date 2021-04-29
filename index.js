/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from "./screens/HomePage";
import LandingViewPage from "./screens/LandingViewPage";
import ClickOutViewPage from "./screens/ClickOutViewPage";
import GAMSupportPage from "./screens/GAMSupportPage";


const MainNavigator = createStackNavigator({
    HomePage: {screen: HomePage},
    GAMAdScreen: {screen: GAMSupportPage},
    NativoLandingScreen: {screen: LandingViewPage},
    ClickOutScreen: {screen: ClickOutViewPage}
});

const AppNavigation = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => AppNavigation);
