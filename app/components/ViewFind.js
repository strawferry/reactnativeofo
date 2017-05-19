import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  PixelRatio,
  Animated,
  Easing,
  Dimensions
} from 'react-native';

import Img from './../config/localImage';
const dip = 1/PixelRatio.get();
export default class ViewFind extends Component {
  constructor(props) {
    super(props);

    this.getBackgroundColor = this.getBackgroundColor.bind(this);
    this.getSizeStyles = this.getSizeStyles.bind(this);
    this.getEdgeSizeStyles = this.getEdgeSizeStyles.bind(this);
    this.state = {
      fadeAnim: new Animated.Value(-2), // opacity 0
    };
  }

  getBackgroundColor() {
    return ({
      backgroundColor: this.props.backgroundColor,
    });
  }

  getEdgeColor() {
    return ({
      borderColor: this.props.color,
    });
  }

  getSizeStyles() {
    return ({
      height: this.props.height,
      width: this.props.width,
    });
  }

  getEdgeSizeStyles() {
    return ({
      height: this.props.borderLength,
      width: this.props.borderLength,
    });
  }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
  componentDidMount() {
    this.state.fadeAnim.addListener((anmi)=>{
      if (anmi.value == - 0.95*this.props.width){
        this._renderAnimatedImage();
      }
    });
      this.timer = setTimeout(
          () => { this._renderAnimatedImage(); },
          1000
      );
  }

  _renderAnimatedImage = ()=>{
    Animated.sequence(
      [ Animated.timing(this.state.fadeAnim, {
        toValue: 10,        // Target
        duration: 0,    // Configuration
      }),
        Animated.timing(this.state.fadeAnim, {
            toValue: - 0.95*this.props.width,        // Target
            duration: 2000,    // Configuration
            easing: Easing.linear
          })
      ]
    ).start();
  };

  render() {
    return (
        <View style={[styles.viewfinder, this.getBackgroundColor(), this.getSizeStyles(),{borderWidth: dip, borderColor: '#ffffff', overflow: 'hidden'}]}>
          <Animated.Image source={Img.scan}
                          style={{width: this.props.width , bottom: this.state.fadeAnim, resizeMode: 'contain'}}/>
          <View style={[
            this.getEdgeColor(),
            this.getEdgeSizeStyles(),
            styles.topLeftEdge,
            {
              borderLeftWidth: this.props.borderWidth,
              borderTopWidth: this.props.borderWidth,
            }
          ]} />
          <View style={[
            this.getEdgeColor(),
            this.getEdgeSizeStyles(),
            styles.topRightEdge,
            {
              borderRightWidth: this.props.borderWidth,
              borderTopWidth: this.props.borderWidth,
            }
          ]} />
          <View style={[
            this.getEdgeColor(),
            this.getEdgeSizeStyles(),
            styles.bottomLeftEdge,
            {
              borderLeftWidth: this.props.borderWidth,
              borderBottomWidth: this.props.borderWidth,
            }
          ]} />
          <View style={[
            this.getEdgeColor(),
            this.getEdgeSizeStyles(),
            styles.bottomRightEdge,
            {
              borderRightWidth: this.props.borderWidth,
              borderBottomWidth: this.props.borderWidth,
            }
          ]} />
        </View>
    );
  }
};

ViewFind.propTypes = {
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderLength: PropTypes.number,
  color: PropTypes.string,
  height: PropTypes.number,
  isLoading: PropTypes.bool,
  width: PropTypes.number,
};

ViewFind.defaultProps = {
  backgroundColor: 'transparent',
  borderWidth: 2,
  borderLength: 30,
  color: 'white',
  height: 200,
  width: 200,
};

var styles = StyleSheet.create({
  viewfinder: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
  topLeftEdge: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  topRightEdge: {
    position: 'absolute',
    top: 0,
    right: dip,
  },
  bottomLeftEdge: {
    position: 'absolute',
    bottom: dip,
    left: 0,
  },
  bottomRightEdge: {
    position: 'absolute',
    bottom: dip,
    right: dip,
  },
});

