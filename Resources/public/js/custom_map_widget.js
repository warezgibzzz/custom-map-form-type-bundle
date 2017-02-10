var CustomMapWidgetClass = function (id, parameters) {
    this.id = id;
    this.x_input = document.getElementById(this.id + '_x');
    this.y_input = document.getElementById(this.id + '_y');
    this.center = [this.x_input.value, this.y_input.value];
    this.parameters = parameters;
    this.map = null;
    this.placemark = null;
    var _this = this;
    $(document).ready(function () {
        _this._init();
        _this._placeMarker();
    });
    $(document).on('click', '.nav.nav-tabs',  function () {
        function init() {
            _this._init();
            _this._placeMarker();
        }

        setTimeout(init, 1000);
    })

};

CustomMapWidgetClass.prototype._init = function () {
    var _this = this;
    console.log(_this.id);
    console.log($(_this.id + ' img').length);
    $('#' + _this.id + ' img').imgViewer({
        canEdit: false,
        dragable: false,
        zoomable: false,
        onClick: function (e, self) {
            _this.addMarker(e, self);
        }
    });
    $(document).find('.sonata-ba-action').on('click', function () {
        $(window).trigger('resize');
    });
    return this;
};

CustomMapWidgetClass.prototype.addMarker = function (e, imgViewer) {
    console.log(e, imgViewer);
    var relPos = imgViewer.cursorToImg(e.pageX, e.pageY);
    var viewPos = imgViewer.imgToView(relPos.x, relPos.y);

    console.log(relPos, viewPos);
    this.x_input.value = viewPos.x;
    this.y_input.value = viewPos.y;
    $('.viewport').find('div').remove();
    // Add marker
    $('<div style="width: 78px; height: 78px; border-radius: 50%; background: #fff; position: absolute; left: ' + (parseInt(viewPos.x) - 39) + 'px; top: ' + (parseInt(viewPos.y) - 39) + 'px; z-index: 4;"/>').appendTo('.viewport');
};

CustomMapWidgetClass.prototype._placeMarker = function () {
    $viewport = $(document).find('.viewport');

    $('<div style="width: 78px; height: 78px; border-radius: 50%; background: #fff; position: absolute; left: ' + (parseInt(this.x_input.value) - 39) + 'px; top: ' + (parseInt(this.y_input.value) - 39) + 'px; z-index: 4;"/>').appendTo($viewport);
};
