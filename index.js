/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import CoreComponents from './src/core-components/CoreComponents';
import FlexBoxDemo from './src/flexbox/FlexBoxDemo';
import FlexboxEditor from './src/flexbox/FlexBoxEditor';

AppRegistry.registerComponent(appName, () => FlexboxEditor);
