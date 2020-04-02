export default class Bone {
  constructor(path, name, startingX = 0, startingY = 0) {
    this.path = path;
    this.name = name;
    this.svg = null;
    this.x = startingX;
    this.y = startingY;
  }

  setSvg(svg) {
    this.svg = svg;
    $("#" + this.name).css("top", this.y + 'px');
    $("#" + this.name).css("left", this.x + 'px');
  }

  calculateBoundingBox() {
    var bb = this.svg.bbox();
    $("#" + this.name).css("width", bb.width + 'px');
    $("#" + this.name).css("height", bb.height + 'px');
  }
}
