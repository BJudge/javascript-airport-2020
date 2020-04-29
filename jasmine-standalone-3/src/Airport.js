var Airport = function() {

};

Airport.prototype.land = function(plane) {
  return "plane landed";
};

Airport.prototype.takeoff = function(plane) {
  return "plane has left the airport";
};
