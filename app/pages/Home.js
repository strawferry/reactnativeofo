


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
    TouchableOpacity,
    Platform

} from 'react-native';

import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / (height - 65);
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import Img from './../config/localImage';
import config from './../config/config';
import { Drawer } from 'native-base';

import SideBar from './SideBar';
export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            active: false,
            latitude: 39.912447645399,
            longitude: 116.2794921875,
            latitudeDelta: LATITUDE_DELTA ,
            longitudeDelta: LONGITUDE_DELTA ,
            select: 0,
            myLatitude: 39.912447645399,
            myLongitude: 116.2794921875,
        };
        this.getCurrentPosition = this.getCurrentPosition.bind(this);
        this.setDrag = this.setDrag.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.openDrawer = this.openDrawer.bind(this);
    }
    getCurrentPosition = ()=>{
        console.log('-----getCurrentPosition-----');
        navigator.geolocation.getCurrentPosition((position) => {
                //var initialPosition = JSON.stringify(position);
                console.log(position);
                let initialPosition = position.coords;
                let lat = initialPosition.latitude;
                let lon = initialPosition.longitude;
                this.setState({
                    latitude: lat,
                    myLatitude: lat,
                    longitude: lon,
                    myLongitude: lon,
                });
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    };

    componentWillMount() {
        this.getCurrentPosition();
    }
    static defaultProps = {
        data: {},
        onDetail: ()=>{},

    };  // 注意这里有分号
    static propTypes = {
        data: React.PropTypes.object.isRequired,
        onDetail: React.PropTypes.func,
    };

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    setDrag = (e) => {
        let lat = e.latitude;
        let lon = e.longitude;
        this.setState({
            myLatitude: lat,
            myLongitude: lon,
            latitudeDelta: e.latitudeDelta,
            longitudeDelta: e.longitudeDelta
        });
    };

    render() {
        return(
        <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<SideBar navigation={this.props.navigation} />}
            onClose={() => this.closeDrawer()} >
            <View style={{flex: 1}}>
                <MapView
                    style={{...StyleSheet.absoluteFillObject,}}
                    showsUserLocation={true}
                    // followsUserLocation={true}
                    showsScale={false}
                    showsPointsOfInterest={false}
                    showsCompass={false}
                    ref={ref => { this.map = ref; }}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: this.state.latitudeDelta,
                        longitudeDelta: this.state.longitudeDelta,
                    }}
                    onRegionChange={(e)=>{
                        // console.log('-------onRegionChange-----');
                        // console.log(e);
                    }}
                    onRegionChangeComplete={(e)=>{
                        //console.log('-------onRegionChangeComplete-----');
                        //console.log(e);
                        this.setDrag(e);
                    }}
                    onLongPress={(e)=>{
                        //console.log('---onLongPress----');
                        //console.log(e);
                    }}
                >
                </MapView>
                {Platform.OS === 'ios' ? <View style={{height: 64, backgroundColor: 'white', position: 'absolute', top: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity activeOpacity={0.8} style={{position: 'absolute', left: 5, top: 17, height: 50,width: 50, justifyContent: 'center', alignItems: 'center'}} onPress={()=>{this.openDrawer()}} >
                        <Image style={{height: 35, width: 35}} source={Img.icon}/>
                    </TouchableOpacity>
                    <Image style={{height: 22, width: 100, top: 8}} source={Img.ofo}/>
                    <TouchableOpacity activeOpacity={0.8}
                                      style={{position: 'absolute', right: 5, top: 17, height: 50,width: 50, justifyContent: 'center', alignItems: 'center'}}
                                      onPress={()=>{this.props.navigation.navigate("HDCenter");}} >
                        <View style={{backgroundColor: 'red', position: 'absolute', right: 5, top: 8, height: 8,width: 8, borderRadius: 8}} />
                        <Image style={{height: 35, width: 35}} source={Img.gift}/>
                    </TouchableOpacity>
                </View> : <View style={{height: 44, backgroundColor: 'white', position: 'absolute', top: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity activeOpacity={0.8} style={{position: 'absolute', left: 5, top: 0, height: 44,width: 44, justifyContent: 'center', alignItems: 'center'}} onPress={()=>{this.openDrawer()}} >
                        <Image style={{height: 35, width: 35}} source={Img.icon}/>
                    </TouchableOpacity>
                    <Image style={{height: 22, width: 100, top: 0}} source={Img.ofo}/>
                    <TouchableOpacity activeOpacity={0.8}
                                      style={{position: 'absolute', right: 5, top: 0, height: 44,width: 44, justifyContent: 'center', alignItems: 'center'}}
                                      onPress={()=>{this.props.navigation.navigate("HDCenter");}} >
                        <View style={{backgroundColor: 'red', position: 'absolute', right: 5, top: 8, height: 8,width: 8, borderRadius: 8}} />
                        <Image style={{height: 35, width: 35}} source={Img.gift}/>
                    </TouchableOpacity>
                </View>}

                <TouchableOpacity activeOpacity={0.8}
                                  onPress={()=>{
                                      this.props.navigation.navigate(
                                          "AppWeb",
                                          {
                                              url: config.yqhy,
                                              title: '活动详情'
                                          });
                                  }}
                                  style={{ shadowOffset: {width: 2, height: 2}, shadowColor: 'black', shadowOpacity: 0.5, shadowRadius: 3, height: 50, backgroundColor: 'white', position: 'absolute', top: Platform.OS === 'ios' ? 74:60, borderRadius: 5, left: 10, right: 10, alignItems: 'center', flexDirection: 'row'}}>
                    <Image style={{height: 18, width: 18, marginLeft: 10}} source={Img.tip}/>
                    <Text style={{marginLeft: 10}}>邀请好友,各得10元现金</Text>
                    <Image style={{position: 'absolute', right: 5, top: 18,height: 15, width: 10}} source={Img.right}/>
                </TouchableOpacity>
                <View style={{height: 160, position: 'absolute', bottom: 0, left: 0, right: 0, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity activeOpacity={0.85} style={{ marginLeft: 30,alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{height: 60, width: 60,}} source={Img.tucao}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.85}
                                      onPress={()=>{
                                          this.props.navigation.navigate("QRScaner");
                                      }}
                                      style={{height: 120, width: 120, backgroundColor: '#B9BCBC', justifyContent: 'center', alignItems: 'center', borderRadius: 60}}>
                        <View style={{height: 110, width: 110, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center', borderRadius: 55}}>
                            <Text style={{color: '#FFDC32', fontSize: 23, fontWeight: 'bold'}}>立即用车</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.85} style={{ marginRight: 30,alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{height: 60, width: 60}} source={Img.tucao}/>

                    </TouchableOpacity>
                </View>
            </View>
        </Drawer>
        );
    }
}