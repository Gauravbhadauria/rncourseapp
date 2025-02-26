/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import CoreComponents from './src/core-components/CoreComponents';
import FlexBoxDemo from './src/flexbox/FlexBoxDemo';
import FlexboxEditor from './src/flexbox/FlexBoxEditor';
import StackDemo from './src/navigation/stack/StackDemo';
import DrawerNavigator from './src/navigation/drawer/DrawerNavigator';
import HooksIntro from './src/hooks/HooksIntro';
import UseStateHookDemo from './src/hooks/UseStateHookDemo';

AppRegistry.registerComponent(appName, () => UseStateHookDemo);
