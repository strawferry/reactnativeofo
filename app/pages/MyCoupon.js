


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

export default class MyCoupon extends Component {

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
                        title={'我的优惠券'}
                        // rightTitle={'余额明细'}
                        // rightFunc={()=>{this.props.navigation.navigate("WalletDetail");}}
                        // rightIcon={Img.sharesj}
                />
                <View style={{justifyContent:'center', alignItems: 'center'}}>
                    <Image style={{marginTop: 20, width: 0.8* width, height: 0.8*width/1.86, top: 0, resizeMode: 'contain'}} source={Img.coupons}/>
                    <Text style={{marginTop: 20, color: '#9F9F9F', fontSize: 15}}>您还没有优惠券呢</Text>
                </View>



            </View>
        );
    }
}