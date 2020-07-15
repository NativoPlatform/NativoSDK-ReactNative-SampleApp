/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FlatListPage from "./screens/FlatListPage";
import HomePage from "./screens/HomePage";
import StandAlonePage from './screens/StandAlonePage';
import ScrollViewPage from "./screens/ScrollViewPage";
import LandingViewPage from "./screens/LandingViewPage";
import MOAPViewPage from "./screens/MOAPViewPage";
import ClickOutViewPage from "./screens/ClickOutViewPage";
import DFPSupportPage from './screens/DFPSupportPage';


const MainNavigator = createStackNavigator({
    HomePage: {screen: HomePage},
    DFPAdScreen: {screen: DFPSupportPage},
});

const AppNavigation = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => AppNavigation);
