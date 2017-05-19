


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

export default class MyMarch extends Component {

    constructor(props){
        super(props);
        this.state = {
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
                        title={'我的行程'}
                        // rightTitle={'计费规则'}
                        rightFunc={()=>{}}
                        rightIcon={Img.sharesj}
                />

            </View>
        );
    }
}