function loadBone() {
    var draw = SVG().addTo('#birdImg');
    var path = draw.path(bone1.path);
    path.fill('#f06').move(0, 0)
    path.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' });
    path.on(['mouseover'], highlightOn);
    path.on(['mouseout'], highlightOff);
}

var highlightOn = function () {
    this.fill({ color: '#fff' })
    var element = this;
    $('#birdImg').on("mousedown", null, element, (event, element) => moveElement(event));
}

function moveElement(event) {
    var element = event.data;
    $('#birdImg').on("mousemove", null, element,  (event, element) => {
        var element = event.data;
        element.center(event.pageX, event.pageY);
    })
}


var highlightOff = function () {
    this.fill({ color: '#000' })

}

var mouseDown = function () {
    this.move(10, 10);
}

// or if you want to pass an event
function whenSomethingHappens(event) {
    element.fire(event)
}

$(function () {
    $('#birdImg').mouseup(() => { $('#birdImg').off("mousedown"); $('#birdImg').off("mousemove"); });

    loadBone();
});

