// Class Structure
// .
// ├── makeDancer
// │   ├── makeBlinkyDancer
// |   ├── makeBlinkyDancer
// |   └── makeBlueSquareDancer

//----------------------- SQUARE DANCER ES6 -------------------//
class MakeSquareDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.css({ "border-radius": 0, "border-color": "blue" });
  }
  newStep() {
    this.oldStep();
    this.$node.toggle();
  }
}

window.MakeSquareDancer = MakeSquareDancer;

//------------------- SPINNY TRIANGLE DANCER ES6 ---------------//
class MakeSpinnyTriangleDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.css({
      width: 0,
      height: 0,
      "border-color": "transparent",
      "border-top": 1,
      "border-left": "width / 2",
      "border-right": "width / 2",
      "border-bottom": "height",
      "border-bottom-color": "white",
      "border-radius": 0,
    });
    this.rotation = 0;
  }
  newStep() {
    this.oldStep();
    this.$node.css({ transform: `rotate(${this.rotation}deg)` });
    this.rotation += 10;
  }
}

window.MakeSpinnyTriangleDancer = MakeSpinnyTriangleDancer;

//----------------------- GIF DANCER ES6 -------------------//
class MakeGifDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.prop("id", "gif");
    this.gifArr = ["dancing-banana", "funny-face", "doge", "poofer", "pug"];
    this.$node.css({
      "border-radius": 0,
      "border-color": "transparent",
      width: 70,
      height: 70,
      "background-image": `URL("./src/images/${
        this.gifArr[Math.floor(Math.random() * 5)]
      }.gif")`,
      // `URL("./src/images/dancing-banana.gif")`
    });
  }
  newStep() {
    this.oldStep();
    // this.$node.toggle();
  }
}

window.MakeGifDancer = MakeGifDancer;

//------------------- BLUE SQUARE DANCER PSEUDOCLASSICAL ----------------//
// var MakeBlueSquareDancer = function (top, left, timeBetweenSteps) {
//   MakeDancer.call(this, top, left, timeBetweenSteps);
//   this.$node.css({ "border-radius": 0, "border-color": "blue" });
// };
// MakeBlueSquareDancer.prototype = Object.create(MakeDancer.prototype);
// MakeBlueSquareDancer.prototype.constructor = MakeBlueSquareDancer;

// MakeBlueSquareDancer.prototype.newStep = function () {
//   this.oldStep();
//   this.$node.toggle();
// };
