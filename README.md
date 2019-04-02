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
	text: "http://jindo.dev.naver.com/collie",
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
</script>
```

新增选项
```
var qrcode = new QRCode('qrcode', {
  text: 'your content',
  width: 125,
  height: 125,
  colorDark : '#000000',
  colorLight : "#fff",
  /*!
	容错级别，可设置为：
	QRCode.CorrectLevel.L
	QRCode.CorrectLevel.M
	QRCode.CorrectLevel.Q
	QRCode.CorrectLevel.H
  */
  correctLevel : QRCode.CorrectLevel.L,
  iconSrc: "http://www.365mini.com/static/image/cry.gif",
  /*!
	内部图片的边框通过如下配置设置样式
  */
  iconRadius: 10,
  iconBorderWidth: 3,
  iconBorderColor: "red",
  /*! 添加边框颜色或图片 */
  borderWidth: 300,
  borderHeight: 300,
  borderImg: "qrcode_border.jpg",
  borderBgColor: "Wheat",
  qrcodeOffsetX: 88,
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

