


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

export default class MyTrips extends Component {

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
                        rightTitle={'计费规则'}
                        rightFunc={()=>{this.props.navigation.navigate("Rule");}}
                        // rightIcon={Img.sharesj}
                />
                <View style={{height: 80, marginHorizontal:10, marginTop: 10, backgroundColor: 'white', borderRadius: 2}}>
                    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain'}} source={Img.shape}/>
                        <Text style={{color: '#392800', fontSize: 15, lineHeight: 17, marginLeft: 5}}>2017.05.16 19:09:52</Text>
                    </View>
                    <Text style={{marginLeft: 10, marginTop: 10, fontSize: 15, color: '#80765B'}}>行程消费  <Text style={{color:'#FFDC32',fontSize: 20}}>¥ <Text style={{color:'#FFDC32', fontSize: 28}}>0.00</Text></Text>   车牌号: 456789067</Text>
                    <Image style={{height: 15, width: 15, resizeMode: 'contain', position: 'absolute', right: 10, top: 30}} source={Img.right}/>
                </View>

                <View style={{height: 80, marginHorizontal:10, marginTop: 10, backgroundColor: 'white', borderRadius: 2}}>
                    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain'}} source={Img.shape}/>
                        <Text style={{color: '#392800', fontSize: 15, lineHeight: 17, marginLeft: 5}}>2017.05.16 19:09:52</Text>
                    </View>
                    <Text style={{marginLeft: 10, marginTop: 10, fontSize: 15, color: '#80765B'}}>行程消费  <Text style={{color:'#FFDC32',fontSize: 20}}>¥ <Text style={{color:'#FFDC32', fontSize: 28}}>0.00</Text></Text>   车牌号: 456789067</Text>
                    <Image style={{height: 15, width: 15, resizeMode: 'contain', position: 'absolute', right: 10, top: 30}} source={Img.right}/>
                </View>

                <View style={{height: 80, marginHorizontal:10, marginTop: 10, backgroundColor: 'white', borderRadius: 2}}>
                    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain'}} source={Img.shape}/>
                        <Text style={{color: '#392800', fontSize: 15, lineHeight: 17, marginLeft: 5}}>2017.05.16 19:09:52</Text>
                    </View>
                    <Text style={{marginLeft: 10, marginTop: 10, fontSize: 15, color: '#80765B'}}>行程消费  <Text style={{color:'#FFDC32',fontSize: 20}}>¥ <Text style={{color:'#FFDC32', fontSize: 28}}>0.00</Text></Text>   车牌号: 456789067</Text>
                    <Image style={{height: 15, width: 15, resizeMode: 'contain', position: 'absolute', right: 10, top: 30}} source={Img.right}/>
                </View>

                <View style={{height: 80, marginHorizontal:10, marginTop: 10, backgroundColor: 'white', borderRadius: 2}}>
                    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                        <Image style={{height: 15, width: 15, resizeMode: 'contain'}} source={Img.shape}/>
                        <Text style={{color: '#392800', fontSize: 15, lineHeight: 17, marginLeft: 5}}>2017.05.16 19:09:52</Text>
                    </View>
                    <Text style={{marginLeft: 10, marginTop: 10, fontSize: 15, color: '#80765B'}}>行程消费  <Text style={{color:'#FFDC32',fontSize: 20}}>¥ <Text style={{color:'#FFDC32', fontSize: 28}}>0.00</Text></Text>   车牌号: 456789067</Text>
                    <Image style={{height: 15, width: 15, resizeMode: 'contain', position: 'absolute', right: 10, top: 30}} source={Img.right}/>
                </View>

            </View>
        );
    }
}