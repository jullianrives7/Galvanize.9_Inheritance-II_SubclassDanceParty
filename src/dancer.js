//----------------------- FIRST ATTEMPT -------------------//

// Creates and returns a new dancer object that can step
var makeDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
};

makeDancer.prototype.oldStep = function () {
  let target = this;
  setTimeout(function () {
    target.newStep();
  }, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function () {
  this.$node.css({ top: this.top, left: this.left });
};

//--------------------- SECOND ATTEMPT --------------------//
// Creates and returns a new dancer object that can step
// var makeDancer = function (top, left, timeBetweenSteps) {
//   this.$node = $('<span class="dancer"></span>');
//   var this_ = this;

//   let callThisDotStep = () => {
//     this_.step();
//   };

//   this.step = function () {
//     setTimeout(callThisDotStep, timeBetweenSteps);
//   };

//   this.setPosition = function (top, left) {
//     this.$node.css({ top: top, left: left });
//   };

//   this.step();
//   this.setPosition(top, left);
// };

//------------------------- ORIGINAL -----------------------//
// // Creates and returns a new dancer object that can step
// var makeDancer = function (top, left, timeBetweenSteps) {
//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function () {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function (top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left,
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

//------------------------- FIRST ATTEMPT -----------------------//

// // Creates and returns a new dancer object that can step
// var makeDancer = function (top, left, timeBetweenSteps) {
//   this.$node = $('<span class="dancer"></span>');
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
//   this.step = function () {
//     setTimeout(function () {
//       this.step;
//     }, 500);
//     console.log("oldStep");
//     console.log(this.step);
//     console.log(this.timeBetweenSteps);
//   };
//   this.setPosition = function () {
//     this.$node.css({ top: this.top, left: this.left });
//   };
//   this.step();
//   this.setPosition();
// };

// makeDancer.prototype.step = function () {
//   setTimeout(function () {
//     this.step;
//   }, 500);
//   console.log("oldStep");
//   console.log(this.step);
//   console.log(this.timeBetweenSteps);
// };

// makeDancer.prototype.setPosition = function () {
//   this.$node.css({ top: this.top, left: this.left });
// };