
var Airport = function(limit) {
  this.hangar = [];
  this.limit = limit || 2;
};

Airport.prototype.land = function(plane, weather) {
  if(weather === 'STORMY') {
    return "Unable to land due to bad weather";
  };
    if(this.hangar.length + 1 > this.limit) {
    return "Unable to Land. Airport Full";
  } if(this.hangar.length  < this.limit) {
      this.hangar.push(plane);
      return "plane landed";
  }

};

Airport.prototype.takeoff = function(plane, weather) {
  if (weather === 'STORMY') {
    return "Unable to take off due to bad weather";
  }
  this.hangar.pop(plane);
  return "plane has left the airport";
};


/* code for random weather function. should be its own class,
so I would put in its only file when it's needed.

const weatherOptions = ['STORMY', 'NOT-STORMY'];

function randomWeather(weatherOptions) {
  return weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
} */
