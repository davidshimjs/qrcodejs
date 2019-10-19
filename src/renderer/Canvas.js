(function (global) {
    // namespace
    global.qrcode = global.qrcode || {};
    var qrcode = global.qrcode;

    var Renderer = function () {
    };

    Renderer.prototype = {
        /**
         * @return {Boolean} If User's browser can support this renderer,
         *                      this value will be set as true
         */
        isSupport: function () {
            return typeof CanvasRenderingContext2D != 'undefined';
        }
    };

    qrcode.Renderer = Renderer;
})(this);