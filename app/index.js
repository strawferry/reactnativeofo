

import {AppRegistry, StyleSheet, Dimensions} from 'react-native';

import App from './App';

const {width,height} = Dimensions.get("window");
global.Sip = StyleSheet.hairlineWidth;
global.SWidth = width;
global.SHeight = height;

if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {},
    };
}

AppRegistry.registerComponent('oforn', () => App);