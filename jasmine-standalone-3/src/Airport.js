
var Airport = function(limit) {
  this.hangar = [];
  this.limit = limit;
};

Airport.prototype.land = function(plane) {
  if(this.hangar.length + 1 > this.limit) {
  return "Unable to Land. Airport Full";
} if(this.hangar.length  < this.limit) {
    this.hangar.push(plane);
    return "plane landed";
}

};

Airport.prototype.takeoff = function(plane) {
  this.hangar.pop(plane);
  return "plane has left the airport";
};
