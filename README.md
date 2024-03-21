# QRCode.js
QRCode.js is a JavaScript library designed for generating QR codes efficiently. It also has wide cross-broswer compatibility. 
Notably, QRCode.js operates independently, devoid of any external dependencies

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

## Futher Guidance
For futher guidance on how to use this library visit https://developerflow.github.io/qrcodejs

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/davidshimjs/qrcodejs/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

