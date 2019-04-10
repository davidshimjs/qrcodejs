# QRCode.js
QRCode.js is javascript library for making QRCode. QRCode.js supports Cross-browser with HTML5 Canvas and table tag in DOM.
QRCode.js has no dependencies.

## Basic Usages
```
<div id="qrcode"></div>
<script type="text/javascript">
new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
</script>
```

or with some options

```
<div id="qrcode"></div>
<script type="text/javascript">
var qrcode = new QRCode(document.getElementById("qrcode"), {
//二维码内容	
	text: "http://jindo.dev.naver.com/collie",
//二维码宽度
	width: 128,
//二维码高度
	height: 128,
//二维码前景色
	colorDark : "#000000",
//二维码背景色
	colorLight : "#ffffff",
//容错级别
	correctLevel : QRCode.CorrectLevel.H
});
</script>
```

新增选项
```
var qrcode = new QRCode('qrcode', {
//二维码内容
  text: 'your content',
//二维码宽度
  width: 125,
//二维码高度
  height: 125,
//二维码前景色
  colorDark : '#000000',
//二维码背景色
  colorLight : "#fff",
  /*!
	容错级别，可设置为：
	QRCode.CorrectLevel.L
	QRCode.CorrectLevel.M
	QRCode.CorrectLevel.Q
	QRCode.CorrectLevel.H
  */
  correctLevel : QRCode.CorrectLevel.L,
//二维码中心图片
  iconSrc: "http://www.365mini.com/static/image/cry.gif",
//二维码中心图片边框弧度
  iconRadius: 10,
//二维码中心图片边框宽度
  iconBorderWidth: 3,
//二维码中心图片边框颜色
  iconBorderColor: "red",
//外围幕布（或画布）的宽度
  curtainWidth: 300,
//外围幕布（或画布）的高度
  curtainHeight: 300,
//外围幕布（或画布）图片
  curtainImg: "qrcode_border.jpg",
//外围幕布（或画布）底色
  curtainBgColor: "Wheat",
//二维码相对外围幕布（或画布）的X偏移
  qrcodeOffsetX: 88,
//二维码相对外围幕布（或画布）的Y偏移
  qrcodeOffsetY: 108,
});
```

and you can use some methods

```
qrcode.clear(); // clear the code.
qrcode.makeCode("http://naver.com"); // make another code.
```

## Browser Compatibility
IE6~10, Chrome, Firefox, Safari, Opera, Mobile Safari, Android, Windows Mobile, ETC.

## License
MIT License

## Contact
twitter @davidshimjs

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/davidshimjs/qrcodejs/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Online Demo
[Online Demo](https://555chy.github.io/qrcodejs/demo.html)
