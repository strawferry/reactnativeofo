


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
    findNodeHandle,
    TouchableOpacity,
    WebView,
    Alert
} from 'react-native';


const {width, height} = Dimensions.get('window');

import Img from './../config/localImage';
import NavBar from './../components/NavBar'
import { BlurView, VibrancyView } from 'react-native-blur';

export default class PersonInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            viewRef: null
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
                        title={'个人信息'}
                        //rightTitle={'right title'}
                        // rightFunc={()=>{alert('on click')}}
                        // rightIcon={Img.sharesj}
                />
                <View style={{justifyContent: 'center', alignItems: 'center', height: 150, width: width}}>
                    <Image style={{height: 150, width: width, resizeMode: 'cover'}}
                           source={Img.avatar}>
                        <VibrancyView blurType="dark" style={{flex:1, alignItems: 'center'}}>
                        </VibrancyView>
                    </Image>
                    <View style={{position: 'absolute', top: 0,right: 0, left:0, justifyContent: 'center', alignItems: 'center',}}>
                    <View style={{marginTop: 15, borderRadius: 76, height: 76, width: 76, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={Img.avatar} style={{height: 70, width: 70, borderRadius: 35}}/>
                    </View>
                        <Text style={{backgroundColor: 'transparent', color: 'white', marginTop: 5, fontSize: 15}}>ofo</Text>
                        <View style={{marginTop: 5, justifyContent: 'center', alignItems: 'center',flexDirection: 'row', backgroundColor:'#fad92f', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 15}}>
                            <Text style={{fontSize: 12}}>信用分: 107</Text>
                            <Image style={{height: 10, width:10, resizeMode: 'contain', marginLeft: 10}} source={Img.right}/>
                        </View>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.85}
                                  style={{height: 50,
                                      flexDirection: 'row',
                                      backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', borderTopColor: '#a0a0a0',  borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#a0a0a0'}}
                                  onPress={()=>{
                                      this.props.navigation.navigate("MyCoupon");
                                  }}>
                    <Text style={{marginLeft: 10, fontSize: 16}}>姓名</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                        <Text style={{fontSize: 15, color: '#a0a0a0'}}>ofo</Text>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain'}} source={Img.right}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.85}
                                  style={{height: 50,
                                      flexDirection: 'row',
                                      backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', borderTopColor: '#a0a0a0', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#a0a0a0'}}
                                  onPress={()=>{
                                      this.props.navigation.navigate("MyCoupon");
                                  }}>
                    <Text style={{marginLeft: 10, fontSize: 16}}>性别</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                        <Text style={{fontSize: 15, color: '#a0a0a0'}}>未设置</Text>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain'}} source={Img.right}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.85}
                                  style={{height: 50,
                                      flexDirection: 'row',
                                      backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', borderTopColor: '#a0a0a0',  borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#a0a0a0'}}
                                  onPress={()=>{
                                      this.props.navigation.navigate("MyCoupon");
                                  }}>
                    <Text style={{marginLeft: 10, fontSize: 16}}>生日</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                        <Text style={{fontSize: 15, color: '#a0a0a0'}}>未设置</Text>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain'}} source={Img.right}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.85}
                                  style={{height: 50,
                                      flexDirection: 'row', marginTop: 20,
                                      backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', borderTopColor: '#a0a0a0',borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#a0a0a0'}}
                                  onPress={()=>{
                                      this.props.navigation.navigate("MyCoupon");
                                  }}>
                    <Text style={{marginLeft: 10, fontSize: 16}}>绑定手机号</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                        <Text style={{fontSize: 15, color: '#a0a0a0'}}>18888888888</Text>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain'}} source={Img.right}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.85}
                                  style={{height: 50,
                                      flexDirection: 'row',
                                      backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', borderTopColor: '#a0a0a0', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#a0a0a0'}}
                                  onPress={()=>{
                                      this.props.navigation.navigate("MyCoupon");
                                  }}>
                    <Text style={{marginLeft: 10, fontSize: 16}}>ofo称号</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                        <Text style={{fontSize: 15, color: '#a0a0a0'}}>认证用户</Text>
                    </View>
                </TouchableOpacity>

                <View style={{height: 70, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom:0, left: 0 ,right: 0, backgroundColor:'white'}}>
                    <TouchableOpacity activeOpacity={0.85}
                                      style={{width: width-30, height: 50,backgroundColor: '#fad92f', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}
                                      onPress={()=>{
Alert.alert(
    '您确定退出吗?',
    '',
    [
        {text: '确定', onPress: () => console.log('Cancel Pressed')},
        {text: '再看看', onPress: () => console.log('Ask me later pressed')},
    ]
    )
                                      }}>
                        <Text>退出登录</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}