// Class Structure
// .
// ├── MakeDancer
// │   ├── MakeBlinkyDancer
// |   ├── MakeSquareDancer
// |   ├── MakeSpinnyTriangleDancer
// |   └── MakeGifDancer

//----------------------- ES6 REFACTOR -------------------//
class MakeBlinkyDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  newStep() {
    this.oldStep();
    this.$node.toggle();
  }
}

window.MakeBlinkyDancer = MakeBlinkyDancer;

//----------------------- FIRST REFACTOR --------------------//
// var MakeBlinkyDancer = function (top, left, timeBetweenSteps) {
//   MakeDancer.call(this, top, left, timeBetweenSteps);
// };
// MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
// MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// MakeBlinkyDancer.prototype.newStep = function () {
//   this.oldStep();
//   this.$node.toggle();
// };

//----------------------- FIRST REFACTOR --------------------//
// var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   var oldStep = this.step;
//   this.step = function () {
//     oldStep.call(this);
//     this.$node.toggle();
//   };
// };
// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//------------------------- ORIGINAL -----------------------//
// var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function () {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };
