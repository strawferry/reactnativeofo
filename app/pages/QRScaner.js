



import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
    TouchableOpacity,
    WebView,
    StatusBar,
} from 'react-native';


const {width, height} = Dimensions.get('window');

import Img from './../config/localImage';
import config from './../config/config';
import NavBar from './../components/NavBar';
import Camera from "react-native-camera";
import ViewFind from './../components/ViewFind';


export default class QRScaner extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
    }
    componentWillUnmount(){
        config.scan =  true;
    }
    static defaultProps = {

    };  // 注意这里有分号
    static propTypes = {
    };

    barcodeReceived(e) {
        if (config.scan){
            this.setState({isCode: false, code: e.data},()=>{
                this.props.navigation.navigate('QRResult');
                config.scan = false;
            });
        }

    }

    render() {
        let NoRadius = <View style={{flex: 1}}>
            <View style={{flex: 1,backgroundColor: "rgba(59,55,56,0.5)"}}>
                <View style={{
                    justifyContent: "space-between",flexDirection: 'row', marginTop: 15, alignItems: 'center',height: 40}}>
                    <TouchableOpacity  onPress={()=>{
                        this.props.navigation.goBack();
                    }} style={{height: 44, width: 44, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={Img.back}
                               style={{height: 20, width: 20}}/>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{fontSize: 18, color: '#FFFFFF'}}>扫码用车</Text>
                    <TouchableOpacity onPress={()=>{

                    }}
                                      style={{height: 44, minWidth:44, justifyContent: 'center',}}>
                        <Text allowFontScaling={false} style={{fontSize: 14, color: '#FFFFFF', marginRight: 10}}>帮助</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flexDirection: "row"}}>
                <View style={{flex: 1, backgroundColor: "rgba(59,55,56,0.5)"}} />

                <ViewFind
                    color={'#FFDD10'}
                    borderWidth={1}
                    borderLength={15}
                    height={ Math.round(0.6 * width)  }
                    isLoading={false}
                    width={ Math.round(0.6 * width) }
                />
                <View style={{flex: 1, backgroundColor: "rgba(59,55,56,0.5)"}} />

            </View>

            <View style={{flex: 1, backgroundColor: "rgba(59,55,56,0.5)"}}>
                <View style={{marginTop: 10, justifyContent: 'center',
                    alignItems: 'center',}}>
                    <Text allowFontScaling={false} style={{color: "#FFDD10", textAlign: 'center',lineHeight: 20, fontSize: 13}}>对准车牌上的二维码</Text>
                </View>
                <View style={{height: 120,width: width, backgroundColor: '#0B0B0A', position: 'absolute', bottom: 0, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{justifyContent: 'center', alignItems:'center', width: 0.4* width}} >
                        <Image style={{height: 60, width: 60}} source={Img.hand} />
                        <Text style={{marginTop: 10, fontSize: 18, color: 'white'}}>手动输入车牌号</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems:'center',  width: 0.4* width}} >
                        <Image style={{height: 60, width: 60}} source={Img.tourch} />
                        <Text style={{marginTop: 10, fontSize: 18, color: 'white'}}>手电筒</Text>
                    </View>

                </View>
            </View>
        </View>;
        return(
            <View style={{flex: 1}}>
                <StatusBar
                    translucent={true}
                    backgroundColor= "transparent"
                    barStyle={'light-content'}
                />
                <Camera
                    onBarCodeRead={(e)=>this.barcodeReceived(e)}
                    style={{ flex: 1 }}
                    showViewFinder={false}
                >
                    {NoRadius}
                </Camera>
            </View>
        );
    }
}