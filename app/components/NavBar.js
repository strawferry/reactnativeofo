import React, {Component} from 'react';
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

const {width, height} = Dimensions.get('window');

import Img from './../config/localImage';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        rightFunc: ()=>{}
    };  // 注意这里有分号

    static propTypes = {
        title: React.PropTypes.string,
        rightTitle: React.PropTypes.string,
        rightIcon: React.PropTypes.any,
        rightFunc: React.PropTypes.func,
    };


    render() {
        return (
            Platform.OS === 'ios' ?<View style={{height: 64, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e5e5e5', shadowOffset: {width: 0, height: 1}, shadowColor: 'gray', shadowOpacity: 0.3, shadowRadius: 2}}>
                <TouchableOpacity activeOpacity={0.8} style={{
                    position: 'absolute',
                    left: 0,
                    top: 17,
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => {
                    this.props.navigation.goBack()
                }}>
                    <Image style={{height: 20, width: 20, transform: [{rotate: "180deg"}], resizeMode: 'contain'}} source={Img.right}/>
                </TouchableOpacity>
                <Text style={{marginTop: 17, fontSize: 17, maxWidth: 0.65 * width, color: '#392900', fontWeight: 'bold'}} numberOfLines={1}>{this.props.title}</Text>
                {this.props.rightTitle&& <TouchableOpacity activeOpacity={0.8} style={{
                    position: 'absolute',
                    right: 10,
                    top: 8,
                    height: 50,
                    maxWidth: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => {
                    this.props.rightFunc();
                }}>
                    <Text style={{marginTop: 17, fontSize: 15, maxWidth: 100, color: '#3C301C'}} numberOfLines={1}>{this.props.rightTitle}</Text>
                </TouchableOpacity>}
                {!this.props.rightTitle && this.props.rightIcon && <TouchableOpacity activeOpacity={0.8} style={{
                    position: 'absolute',
                    right: 0,
                    top: 19,
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => {
                    this.props.rightFunc();
                }}>
                    <Image style={{height: 30, width: 30}} source={this.props.rightIcon}/>
                </TouchableOpacity>}
            </View>: <View style={{height: 44, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e5e5e5', shadowOffset: {width: 0, height: 1}, shadowColor: 'gray', shadowOpacity: 0.3, shadowRadius: 2}}>
                <TouchableOpacity activeOpacity={0.8} style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: 44,
                    width: 44,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => {
                    this.props.navigation.goBack()
                }}>
                    <Image style={{height: 20, width: 20, transform: [{rotate: "180deg"}], resizeMode: 'contain'}} source={Img.right}/>
                </TouchableOpacity>
                <Text style={{marginTop: 0, fontSize: 17, maxWidth: 0.65 * width, color: '#392900', fontWeight: 'bold'}} numberOfLines={1}>{this.props.title}</Text>
                {this.props.rightTitle&& <TouchableOpacity activeOpacity={0.8} style={{
                    position: 'absolute',
                    right: 10,
                    top: 0,
                    height: 44,
                    maxWidth: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => {
                    this.props.rightFunc();
                }}>
                    <Text style={{marginTop: 0, fontSize: 15, maxWidth: 100, color: '#3C301C'}} numberOfLines={1}>{this.props.rightTitle}</Text>
                </TouchableOpacity>}
                {!this.props.rightTitle && this.props.rightIcon && <TouchableOpacity activeOpacity={0.8} style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    height: 44,
                    width: 44,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => {
                    this.props.rightFunc();
                }}>
                    <Image style={{height: 30, width: 30}} source={this.props.rightIcon}/>
                </TouchableOpacity>}
            </View>

        );
    }
}