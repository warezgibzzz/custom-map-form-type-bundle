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

};

CustomMapWidgetClass.prototype._init = function () {
    var _this = this;
    console.log(_this.id);
    console.log($(_this.id + ' img').length);
    $(document).find('#' + _this.id + ' img').on('click', function (e) {
        _this.addMarker(e);

    });
    return this;
};

CustomMapWidgetClass.prototype.addMarker = function (e) {
    console.log($('#' + this.id + ' img').offset(), [e.pageX, e.pageY], this._mousePositionElement(e));
    imageOffset = $('#' + this.id + ' img').offset();
    // var relPos = imgViewer.cursorToImg(e.pageX, e.pageY);
    viewPos = this._mousePositionElement(e);

    this.x_input.value = parseInt(viewPos.x);
    this.y_input.value = parseInt(viewPos.y);
    $('#' + this.id).find('div').remove();
    // Add marker
    $('<div style="width: 74px; height: 74px; border: 2px solid #000000; border-radius: 50%; background: #fff; position: absolute; left: ' + (parseInt(viewPos.x) - 679) + 'px; top: ' + (parseInt(viewPos.y) + 30) + 'px; z-index: 4;"/>').appendTo('#' + this.id);
};

CustomMapWidgetClass.prototype._placeMarker = function () {
    $viewport = $(document).find('#' + this.id);
    console.log(this.id, $viewport);

    $('<div style="width: 74px; height: 74px; border: 2px solid #000000; border-radius: 50%; background: #fff; position: absolute; left: ' + (parseInt(this.x_input.value) - 640) + 'px; top: ' + (parseInt(this.y_input.value)) + 'px; z-index: 4;"/>').appendTo($viewport);
};

CustomMapWidgetClass.prototype._mouseTarget = function (e) {
    var targ;
    if (!e) e = window.event;
    if (e.target) targ = e.target;
    else if (e.srcElement) targ = e.srcElement;
    if (targ.nodeType == 3) // defeat Safari bug
        targ = targ.parentNode;
    return targ;
};

CustomMapWidgetClass.prototype._mousePositionDocument = function (e) {
    posx = 0;
    posy = 0;
    if (!e) {
        e = window.event;
    }
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return {
        x: posx,
        y: posy
    };
};

CustomMapWidgetClass.prototype._findPos = function (obj) {
    curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return {
        left: curleft,
        top: curtop
    };
};

CustomMapWidgetClass.prototype._mousePositionElement = function (e) {
    mousePosDoc = this._mousePositionDocument(e);
    target = this._mouseTarget(e);
    targetPos = this._findPos(target);
    posx = mousePosDoc.x - targetPos.left;
    posy = mousePosDoc.y - targetPos.top;

    return {
        x: posx,
        y: posy
    };
};
