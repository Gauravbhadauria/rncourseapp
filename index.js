/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ClassComponent from './src/components/ClassComponent';
import InlineStyles from './src/styles/InlineStyles';
import StylesheetStyles from './src/styles/StylesheetStyles';
import CommonStylesDemo from './src/styles/CommonStylesDemo';
import StyledComponentsDemo from './src/styles/StyledComponentsDemo';

AppRegistry.registerComponent(appName, () => ClassComponent);
