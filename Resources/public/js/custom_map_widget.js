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
    console.log(_this.id);
    console.log($(_this.id + ' img').length);
    $('#' + _this.id + ' img').imgNotes({
        canEdit: true,
        dragable: false,
        zoomable: false
    });
    return this;
};
