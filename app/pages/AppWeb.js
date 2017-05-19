


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
    TouchableOpacity,
    WebView
} from 'react-native';


const {width, height} = Dimensions.get('window');

import Img from './../config/localImage';
import NavBar from './../components/NavBar'

import Share, {ShareSheet, Button} from 'react-native-share';
export default class AppWeb extends Component {

    constructor(props){
        super(props);
        this.state = {
            url: 'https://www.baidu.com'
        };
        // this.shareOptions = this.shareOptions.bind(this);
    }

    componentWillMount() {
    }
    static defaultProps = {
        data: {},
        onDetail: ()=>{},

    };  // 注意这里有分号
    static propTypes = {
    };


     shareOptions = {
        title: "React Native",
        url: this.props.navigation.state.params.url,
        subject: "Share Link" //  for email
    };

    render() {
        return(
            <View style={{flex: 1}}>
                <NavBar navigation={this.props.navigation}
                        title={this.props.navigation.state.params.title}
                        //rightTitle={'right title'}
                        rightFunc={()=>{Share.open(this.shareOptions);}}
                        rightIcon={Img.sharesj}/>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    style={{flex: 1}}
                    source={{uri: this.props.navigation.state.params.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={true}
                />
            </View>
        );
    }
}