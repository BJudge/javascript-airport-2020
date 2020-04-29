
var Airport = function() {
  this.hangar = [];
};

const limit = 2;

Airport.prototype.land = function(plane) {
  if(this.hangar.length + 1 > limit) {
  return "Unable to Land. Airport Full";
} if(this.hangar.length  <=limit) {
    this.hangar.push(plane);
    return "plane landed";
}

};

Airport.prototype.takeoff = function(plane) {
  return "plane has left the airport";
};
