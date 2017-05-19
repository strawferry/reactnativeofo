


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';


const {width, height} = Dimensions.get('window');

import Img from './../config/localImage';
import config from './../config/config';
import NavBar from './../components/NavBar';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class WalletDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
        this._keyExtractor = this._keyExtractor.bind(this);
    }

    componentWillMount() {
    }
    static defaultProps = {

    };  // 注意这里有分号
    static propTypes = {
    };
    renderItemsxf = (item, index)=>{
        return <View style={{marginLeft: 20, height: 70, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#a0a0a0', justifyContent: 'center', }}>
            <Text style={{fontSize: 16}}>行程消费</Text>
            <Text style={{marginTop: 10, color: '#80765B'}}>2017-05-12 17:51:09</Text>
            <Text style={{fontSize: 20, color: '#FFDC32', position: 'absolute', right: 10}}>1元</Text>
        </View>
    };
    renderItemscz = (item, index)=>{
        return <View style={{marginLeft: 20, height: 70, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#a0a0a0', justifyContent: 'center', }}>
            <Text style={{fontSize: 16}}>支付宝支付20元</Text>
            <Text style={{marginTop: 10, color: '#80765B'}}>2017-05-12 17:51:09</Text>
            <Text style={{fontSize: 20, color: '#FFDC32', position: 'absolute', right: 10}}>+25.00元</Text>
        </View>
    };

    _keyExtractor = (item, index) => JSON.stringify(item) + index;

    render() {
        return(
            <View style={{flex: 1}}>
                <NavBar navigation={this.props.navigation}
                        title={'余额明细'}
                        // rightTitle={'余额明细'}
                        // rightFunc={()=>{}}
                        // rightIcon={Img.sharesj}
                />
                <ScrollableTabView
                    style={{backgroundColor: 'white'}}
                    initialPage={0}
                    renderTabBar={() => <DefaultTabBar textStyle={{marginTop: 10}} activeTextColor='#000000' underlineStyle={{backgroundColor: "#fad92f", height: 2, marginHorizontal: 20, width: 0.5* width-40}} />}
                >
                    <FlatList
                        style={{backgroundColor: '#FAFAFA'}}
                        tabLabel='消费明细'
                        data={[
                            {img: Img.hd2, url: config.hd2, title: 'ofo 母亲节特献'},
                            {img: Img.hd1, url: config.yqhy, title: '活动详情'},
                            {img: Img.hd3, url: config.hd3, title: 'ofo 推广大使-鹿晗'},
                            {img: Img.hd2, url: config.hd2, title: 'ofo 母亲节特献'},
                            {img: Img.hd1, url: config.yqhy, title: '活动详情'},
                            {img: Img.hd3, url: config.hd3, title: 'ofo 推广大使-鹿晗'},
                        ]}
                        keyExtractor={this._keyExtractor}
                        renderItem={this.renderItemsxf}
                        ListFooterComponent={()=>{
                            return <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                                <Text style={{color: '#B8B3A7'}}>没有更多了</Text>
                            </View>;
                        }}
                    />
                    <FlatList
                        style={{backgroundColor: '#FAFAFA'}}
                        tabLabel='充值明细'
                        data={[
                            {img: Img.hd2, url: config.hd2, title: 'ofo 母亲节特献'},
                            {img: Img.hd1, url: config.yqhy, title: '活动详情'},
                            {img: Img.hd3, url: config.hd3, title: 'ofo 推广大使-鹿晗'},
                            {img: Img.hd2, url: config.hd2, title: 'ofo 母亲节特献'},
                            {img: Img.hd1, url: config.yqhy, title: '活动详情'},
                            {img: Img.hd3, url: config.hd3, title: 'ofo 推广大使-鹿晗'},
                        ]}
                        keyExtractor={this._keyExtractor}
                        renderItem={this.renderItemscz}
                        ListFooterComponent={()=>{
                            return <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                                <Text style={{color: '#B8B3A7'}}>没有更多了</Text>
                            </View>;
                        }}
                    />
                </ScrollableTabView>


            </View>
        );
    }
}