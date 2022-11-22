//----------------------- BLUE SQUARE DANCER --------------------//
var makeBlueSquareDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};
makeBlueSquareDancer.prototype = Object.create(makeDancer.prototype);
makeBlueSquareDancer.prototype.constructor = makeBlueSquareDancer;

makeBlueSquareDancer.prototype.newStep = function () {
  this.oldStep();
  this.$node.toggle();
};
