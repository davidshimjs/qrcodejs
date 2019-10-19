(function (global) {
    // namespace
    global.qrcode = global.qrcode || {};
    var qrcode = global.qrcode;

    var util = {
        /**
         * Get information of an android device. Android 2.x doesn't support a Data-URI spec.
         * @return {Number|Boolean}
         */
        getAndroidDeviceInfo = function () {
            var android = false;
            var agent = navigator.userAgent;
            
            if (/android/i.test(agent)) {
                android = true;
                mat = agent.toString().match(/android ([0-9]\.[0-9])/i);
                
                if (mat && mat[1]) {
                    android = parseFloat(mat[1]);
                }
            }
            
            return android;
        },

        /**
         * Get a length of UTF-8 Strings (with BOM)
         * @param {String} str
         * @return {Number}
         */
        getUTF8Length: function (str) {
            var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
            return replacedText.length + (replacedText.length !== sText.length ? 3 /* a size of BOM */ : 0);
        }
    };

    qrcode.util = util;
})(this);