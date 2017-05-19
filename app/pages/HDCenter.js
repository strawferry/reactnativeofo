


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
import NavBar from './../components/NavBar'

export default class HDCenter extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
        this.renderItems = this.renderItems.bind(this);
        this._keyExtractor = this._keyExtractor.bind(this);
    }

    componentWillMount() {
    }
    static defaultProps = {
        data: {},
        onDetail: ()=>{},

    };  // 注意这里有分号
    static propTypes = {
    };

    renderItems = (item, index)=>{
        console.log(item);
        return <TouchableOpacity key={index} activeOpacity={0.85}
                                 onPress={()=>{
                                     this.props.navigation.navigate(
                                         "AppWeb",
                                         {
                                             url: item.item.url,
                                             title: item.item.title
                                         });
                                 }}
                                 style={{width: width, justifyContent: 'center', alignItems: 'center', marginVertical: 6, }}>
            <Image style={{height: (width-20)/2.09, width: width - 20, borderRadius: 5}} source={item.item.img} />
        </TouchableOpacity>
    };

    _keyExtractor = (item, index) => JSON.stringify(item) + index;
    render() {
        return(
            <View style={{flex: 1}}>
                <NavBar navigation={this.props.navigation}
                        title={'活动中心'}
                        // rightTitle={'right title'}
                        // rightFunc={()=>{alert('on click')}}
                        // rightIcon={Img.sharesj}
                />
                <FlatList
                    data={[
                        {img: Img.hd2, url: config.hd2, title: 'ofo 母亲节特献'},
                        {img: Img.hd1, url: config.yqhy, title: '活动详情'},
                        {img: Img.hd3, url: config.hd3, title: 'ofo 推广大使-鹿晗'},
                        {img: Img.hd2, url: config.hd2, title: 'ofo 母亲节特献'},
                        {img: Img.hd1, url: config.yqhy, title: '活动详情'},
                        {img: Img.hd3, url: config.hd3, title: 'ofo 推广大使-鹿晗'},
                    ]}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItems}
                />
            </View>
        );
    }
}