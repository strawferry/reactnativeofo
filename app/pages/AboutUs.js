


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

export default class AboutUs extends Component {

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
                        title={'关于ofo'}
                        //rightTitle={'right title'}
                        // rightFunc={()=>{alert('on click')}}
                        // rightIcon={Img.sharesj}
                />
                <View style={{justifyContent: 'center', width: width, alignItems: 'center', backgroundColor: 'white'}}>
                <Image style={{height: 80, width: 80, borderRadius: 8, marginTop: 20}} source={Img.logo}/>
                    <Text style={{maxWidth: width - 40, marginVertical: 20, lineHeight: 20}}>
                        ofo 共享单车是全球第一个无桩共享单车出行平台,首创"单车共享"模式.用户只需要在微信服务或App输入车牌号,即可获得密码解锁用车,随取随用,随时随地.
                    </Text>
                </View>
                <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e5e5e5',backgroundColor: 'white', height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                    <Text style={{marginLeft: 10}}>微信服务号</Text>
                    <Text style={{marginRight: 10}}>ofobike</Text>
                </View>
                <TouchableOpacity activeOpacity={0.85} onPress={()=>{
                    this.props.navigation.navigate(
                        "AppWeb",
                        {
                            url: 'https://www.ofo.com',
                            title: 'ofo官网'
                        });
                }} style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e5e5e5',backgroundColor: 'white', height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{marginLeft: 10}}>ofo官网</Text>
                    <Text style={{marginRight: 10}}>www.ofo.com</Text>
                </TouchableOpacity>
                <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e5e5e5',backgroundColor: 'white', height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{marginLeft: 10}}>商务合作</Text>
                    <Text style={{marginRight: 10}}>ferryvip@163.com</Text>
                </View>
                <View style={{width: width, position: 'absolute', bottom: 10, alignItems: 'center'}}>
                    <Text style={{lineHeight: 20, color: 'gray'}}>当前版本: 1.0.0</Text>
                    <Text style={{lineHeight: 20, color: 'gray'}}>2017 ferryvip@163.com 仿造</Text>
                    <Text style={{lineHeight: 20, color: 'gray'}}>北京大铁锤科技有限公司</Text>
                </View>


            </View>
        );
    }
}