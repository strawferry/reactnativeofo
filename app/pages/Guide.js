


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

export default class Guide extends Component {

    constructor(props){
        super(props);
        this.state = {
            url: 'https://common.ofo.so/about/help.html'
        };
    }

    componentWillMount() {
    }
    static defaultProps = {

    };  // 注意这里有分号
    static propTypes = {
    };



    render() {
        return(
            <View style={{flex: 1}}>
                <NavBar navigation={this.props.navigation}
                        title={'使用指南'}
                        //rightTitle={'right title'}
                        // rightFunc={()=>{alert('on click')}}
                        // rightIcon={Img.sharesj}
                />
                <WebView
                    automaticallyAdjustContentInsets={false}
                    style={{flex: 1}}
                    source={{uri: this.state.url}}
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