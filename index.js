import Skeleton from "./bones/Skeleton.js";

var skeleton = new Skeleton();
var boneColor = '#e3dac9';

function loadBone(bone) {
    var draw = SVG().addTo('#birdImg');
    draw.attr("id",bone.name);
    var path = draw.path(bone.path);
    path.fill(boneColor).move(0, 0);
    path.stroke({ color: 'black', width: 1, linecap: 'round', linejoin: 'round' });
    bone.setSvg(draw);
    bone.calculateBoundingBox();
    path.on(['mouseover'], highlightOn);
    path.on(['mouseout'], highlightOff);
}

var highlightOn = function () {
    this.parents()[0].on("mousedown", onSvgMouseDown);
    this.fill({ color: '#dfd0b7' })
}

var highlightOff = function () {
    this.parents()[0].off("mousedown", onSvgMouseDown);
    this.fill({ color: boneColor})
}

var offset = [0, 0];

var onSvgMouseDown = function (e) {
    var svg = this;
    $(document).on("mousemove", null, svg, (event, svg) => moveSvg(event));
    $(svg).off("mousedown", onSvgMouseDown);
    var id = this.id();
    var elementOffset = $("#"+id).offset();
    offset = [
        elementOffset.left - e.clientX,
        elementOffset.top - e.clientY
    ];
}

var moveSvg = function (e) {
    e.preventDefault();
    let mousePosition = {
        x: event.clientX,
        y: event.clientY
    };
    var id = e.data.id();
    $("#"+id).css("top", (mousePosition.y + offset[1]) + 'px');
    $("#"+id).css("left", (mousePosition.x + offset[0]) + 'px');
}

$(function () {
    $(document).on("mouseup", () => { $(document).off("mousemove") });
    var bones = skeleton.getBones();
    for (let i = 0; i < bones.length; i++) {
        loadBone(bones[i]);
    };
});

