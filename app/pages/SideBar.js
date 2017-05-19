

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
    TouchableOpacity,
    ScrollView,

} from 'react-native';


import Img from './../config/localImage';
import config from './../config/config';
const {width, height} = Dimensions.get('window');

export default class SideBar extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
        this.goto = this.goto.bind(this);
    }

    goto = (to)=>{
        switch (to){
            case 'grzx':
                return this.props.navigation.navigate("PersonInfo");
            case 'wdxc':
                return this.props.navigation.navigate("MyTrips");
            case 'wdqb':
                return this.props.navigation.navigate("MyWallet");
            case 'sryhm':
                return this.props.navigation.navigate("InputCode");
            case 'yqhy':
                return this.props.navigation.navigate("AppWeb", {url: config.yqhy, title: '活动详情'});
            case 'syzn':
                return this.props.navigation.navigate("Guide");
            case 'gywm':
                return this.props.navigation.navigate("AboutUs");

        }
    };

    render() {
        return(
            <View style={{flex: 1, width: width - 80, backgroundColor: 'white'}}>
                <TouchableOpacity activeOpacity={0.85}
                                  onPress={()=>{
                                      this.goto('grzx');
                                  }}
                                  style={{height: 150, borderBottomColor: 'lightgray', borderBottomWidth: StyleSheet.hairlineWidth, alignItems: 'center', flexDirection: 'row'}}>
                    <Image style={{height: 80, width: 80, borderRadius: 40, marginLeft: 30}} source={Img.avatar}/>
                    <View style={{height: 80, marginLeft: 15, justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#301600'}}>ofo</Text>
                        <View style={{marginVertical: 8, flexDirection: 'row'}}>
                            <Image style={{height: 22, width: 25, top: -3}} source={Img.card}/>
                            <Text style={{fontSize: 14, color: '#686868', marginLeft: 3}}>已认证</Text>
                        </View>
                        <Text style={{fontSize: 15, color: '#5C5C5C'}}>信用分:106</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView>
                    <View style={{height: height - 150}}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity activeOpacity={0.85}
                                              onPress={()=>{
                                                  this.goto('wdxc');
                                              }}
                                              style={{flexDirection: 'row', height: 45, width: width -80, alignItems: 'center', marginTop: 10}}>
                                <Image style={{height: 20, width: 25, top: 0, resizeMode: 'contain', marginLeft: 30}} source={Img.receipt}/>
                                <Text style={{fontSize: 17, color: '#3D2200', marginLeft: 15}}>我的行程</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.85}
                                              onPress={()=>{
                                                  this.goto('wdqb');
                                              }}
                                              style={{flexDirection: 'row', height: 45, width: width -80, alignItems: 'center'}}>
                                <Image style={{height: 20, width: 25, top: 0, resizeMode: 'contain', marginLeft: 30}} source={Img.wallet}/>
                                <Text style={{fontSize: 17, color: '#3D2200', marginLeft: 15}}>我的钱包</Text>
                                <Text style={{fontSize: 17, color: '#3D2200', position: 'absolute', right:25}}>82.47元</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.85}
                                              onPress={()=>{
                                                  this.goto('sryhm');
                                              }}
                                              style={{flexDirection: 'row', height: 45, width: width -80, alignItems: 'center'}}>
                                <Image style={{height: 20, width: 25, top: 0, resizeMode: 'contain', marginLeft: 30}} source={Img.redeem}/>
                                <Text style={{fontSize: 17, color: '#3D2200', marginLeft: 15}}>输入优惠码</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.85}
                                              onPress={()=>{
                                                  this.goto('yqhy');
                                              }}
                                              style={{flexDirection: 'row', height: 45, width: width -80, alignItems: 'center'}}>
                                <Image style={{height: 20, width: 25, top: 0, resizeMode: 'contain', marginLeft: 30}} source={Img.share}/>
                                <Text style={{fontSize: 17, color: '#3D2200', marginLeft: 15}}>邀请好友</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.85}
                                              onPress={()=>{
                                                  this.goto('syzn');
                                              }}
                                              style={{flexDirection: 'row', height: 45, width: width -80, alignItems: 'center'}}>
                                <Image style={{height: 20, width: 25, top: 0, resizeMode: 'contain', marginLeft: 30}} source={Img.help}/>
                                <Text style={{fontSize: 17, color: '#3D2200', marginLeft: 15}}>使用指南</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.85}
                                              onPress={()=>{
                                                  this.goto('gywm');
                                              }}
                                              style={{flexDirection: 'row', height: 45, width: width -80, alignItems: 'center'}}>
                                <Image style={{height: 20, width: 25, top: 0, resizeMode: 'contain', marginLeft: 30}} source={Img.info}/>
                                <Text style={{fontSize: 17, color: '#3D2200', marginLeft: 15}}>关于我们</Text>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity activeOpacity={0.85}
                                          onPress={()=>{
                                              this.goto('yqhy');
                                          }}
                                          style={{width: width -80, alignItems: 'center'}}>
                        <Image style={{width: width -100, height: (width -100)/2.15, resizeMode: 'contain', marginVertical: 10}} source={Img.ad} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        );
    }
}