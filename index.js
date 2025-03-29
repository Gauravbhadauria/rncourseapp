/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import FetchDemo from './src/apis/FetchDemo';
import AsyncStorageDemo from './src/async-storage/AsyncStorageDemo';
import Animations from './src/animations/Animations';
import Transforms from './src/animations/Transforms';

AppRegistry.registerComponent(appName, () => Transforms);
