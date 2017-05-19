# ofo ReactNative 仿版(主要是做 iOS版本)

## 原因

之前一直想做个 ReactNative 关于地图相关的 demo ,然后近两天在群里看见有人发的 RN 做的 ofo 共享单车的仿版(主要是针对安卓的),就想着乘着这几天活不多,也做一个,用下最新的 RN 版本(0.44),本来是想体验一下一些新特性的,目前主要还是在40以下做项目,主要考虑版本兼容,不过目前看也差不多可以升级40以上了,至于这个 ofo 仿版还是有很多没有用到新的特性的东西,好了话不多说,上效果图;

## 效果图
|iOS|安卓|
|:--:|:--:|
|![](./ios.gif)|![](./az.gif)|


## `package.json`

```js
    "native-base": "^2.1.3",
    "react": "16.0.0-alpha.6",
    "react-native": "0.44.0",
    "react-native-blur": "^3.0.0-alpha",
    "react-native-camera": "^0.8.0",
    "react-native-maps": "^0.15.0",
    "react-native-scrollable-tab-view": "^0.6.6",
    "react-native-share": "^1.0.20",
    "react-native-simple-toast": "^0.0.6",
    "react-navigation": "^1.0.0-beta.9"
```

主要用到的一些依赖,时间比较匆忙,有些没有兼容两个平台,特别是安卓,地图的没有做到很详细;

## 项目怎么跑起来

1. 把本仓库下载或者克隆下来;
2. 前往仓库目录,终端执行 `npm install` 或者 `yarn`;
3. 终端执行 `react-native link`,链接相关的依赖;
4. 然后运行项目;

## 感谢

当时在群里看到这个仓库,发现做的还不错,但是主要是针对安卓的,当时 iOS 适配比较差,就想着搞一个出来;
[React Native 仿 ofo 共享单车 App http://www.marno.cn](https://github.com/MarnoDev/react-native-ofo)
