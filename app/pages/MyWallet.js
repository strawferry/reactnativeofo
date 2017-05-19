


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

export default class MyWallet extends Component {

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
                        title={'我的钱包'}
                        rightTitle={'余额明细'}
                        rightFunc={()=>{this.props.navigation.navigate("WalletDetail");}}
                        // rightIcon={Img.sharesj}
                />
                <View style={{backgroundColor: 'white', alignItems: 'center', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#a0a0a0',}}>
                    <Text style={{fontSize: 12, marginTop: 15, color: '#a0a0a0'}}>我的余额(元)</Text>
                    <Text style={{fontSize: 35, fontWeight: 'bold'}}>82.47</Text>
                    <View style={{marginTop: 15, marginBottom: 8, borderRadius: 10, borderWidth: StyleSheet.hairlineWidth, borderColor: '#a0a0a0', paddingHorizontal: 5, paddingVertical: 2}}>
                    <Text style={{fontSize: 12, color: '#a0a0a0'}}>余额说明</Text>
                    </View>
                </View>

                <View style={{height: 120, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={0.85}
                                  style={{width: width-30, height: 50,backgroundColor: '#fad92f', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}
                                  onPress={()=>{

                }}>
                    <Text>充值</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.85}
                                  style={{height: 50,
                                      flexDirection: 'row',
                                      backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', borderTopColor: '#a0a0a0', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#a0a0a0'}}
                                  onPress={()=>{
                                      this.props.navigation.navigate("MyCoupon");
                                  }}>
                    <Text style={{marginLeft: 10, fontSize: 16}}>我的用车券</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                    <Text style={{fontSize: 12, color: '#a0a0a0'}}>0张</Text>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain'}} source={Img.right}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.85}
                                  style={{height: 50,
                                      flexDirection: 'row',
                                      backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', borderTopColor: '#a0a0a0',  borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#a0a0a0'}}
                                  onPress={()=>{

                                  }}>
                    <Text style={{marginLeft: 10, fontSize: 16}}>我的押金</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                    <Text style={{fontSize: 12, color: '#a0a0a0'}}>99元,退押金</Text>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain'}} source={Img.right}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.85}
                                  style={{height: 50,
                                      flexDirection: 'row',
                                      backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', borderTopColor: '#a0a0a0', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#a0a0a0'}}
                                  onPress={()=>{

                                  }}>
                    <Text style={{marginLeft: 10, fontSize: 16}}>我的红包</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                    <Text style={{fontSize: 12, color: '#a0a0a0'}}>红包区活动</Text>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain', marginHorizontal: 3}} source={Img.red}/>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain'}} source={Img.right}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}