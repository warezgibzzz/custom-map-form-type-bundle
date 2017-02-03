var CustomMapWidgetClass = function (id, parameters) {
    this.id = id;
    this.x_input = document.getElementById(this.id + '_x');
    this.y_input = document.getElementById(this.id + '_y');
    this.center = [this.x_input.value, this.y_input.value];
    this.parameters = parameters;
    this.map = null;
    this.placemark = null;

    this._init();
};

CustomMapWidgetClass.prototype._init = function () {
    var _this = this;
    $('#' + _this.id + ' img').imgViewer({
        dragable: false,
        zoomable: false,
        onClick: function (e, self) {
            var cursorPos = self.cursorToImg(e.pageX, e.pageY);
            var relativePos = self.imgToView(cursorPos.x, cursorPos.y);
            _this.x_input.value = relativePos.x;
            _this.y_input.value = relativePos.y;
        }
    });
    return this;
};
