


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,Dimensions,
    View,
    Platform
} from 'react-native';

import {
    AboutUs,
    AppWeb,
    Guide,
    HDCenter,
    Home,
    InputCode,
    MyCoupon,
    MyMarch,
    MyTrips,
    MyWallet,
    PersonInfo,
    QRScaner,
    Rule,
    WalletDetail,

} from './pages';

// export default Home;

import { StackNavigator } from 'react-navigation';

const ExampleRoutes = {
    HDCenter: {
        name: '活动中心',
        description: 'A card stack',
        screen: HDCenter,
        navigationOptions: () => ({
            title: 'Settings',
        }),
    },
    AppWeb: {
        name: 'App Web',
        description: 'App Web',
        screen: AppWeb,
    },
    PersonInfo: {
        name: 'PersonInfo',
        description: 'PersonInfo',
        screen: PersonInfo,
    },
    MyTrips: {
        name: 'MyTrips',
        description: 'MyTrips',
        screen: MyTrips,
    },
    Rule: {
        name: 'Rule',
        description: 'Rule',
        screen: Rule,
    },
    MyMarch: {
        name: 'MyMarch',
        description: 'MyMarch',
        screen: MyMarch,
    },
    MyWallet: {
        name: 'MyWallet',
        description: 'MyWallet',
        screen: MyWallet,
    },
    WalletDetail: {
        name: 'WalletDetail',
        description: 'WalletDetail',
        screen: WalletDetail,
    },
    Guide: {
        name: 'Guide',
        description: 'Guide',
        screen: Guide,
    },
    InputCode: {
        name: 'InputCode',
        description: 'InputCode',
        screen: InputCode,
    },
    AboutUs: {
        name: 'AboutUs',
        description: 'AboutUs',
        screen: AboutUs,
    },
    MyCoupon: {
        name: 'MyCoupon',
        description: 'MyCoupon',
        screen: MyCoupon,
    },
    QRScaner: {
        name: 'QRScaner',
        description: 'QRScaner',
        screen: QRScaner,
    }
};


const AppNavigator = StackNavigator(
    {
        ...ExampleRoutes,
        Index: {
            screen: Home,
        },
    },
    {
        initialRouteName: 'Index',
        headerMode: 'none',

        /*
         * Use modal on iOS because the card mode comes from the right,
         * which conflicts with the drawer example gesture
         */
        mode: Platform.OS === 'ios' ? 'card' : 'card',
    }
);

export default () => <AppNavigator />;

