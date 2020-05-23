class Airport {

  constructor(capacity) {
    this.DEFAULTCAPACITY = capacity || 2;
    this.hangar = [];
    this.weatherCondition = "Good";
  }

  land(landingPlane) {
    if(this.weatherCondition === "Bad") {
      return 'Unable to land, weather too stormy'
    }
    if (this.hangar.length + 1 > this.DEFAULTCAPACITY) {
      return "Sorry Airport Full";
    }
    this.hangar.push(landingPlane)
    return "Plane landed succesfully";
  }

  takeoff(leavingPlane) {
    if(this.weatherCondition === "Bad") {
      return 'Unable to takeoff, weather too stormy'
    }
    var positionOfPlane = this.hangar.indexOf(leavingPlane);
    if (positionOfPlane > -1) {
      this.hangar.splice(positionOfPlane, 1);
      return 'Plane has succesfully taken off';
    }
  }
  weather(forecast) {
    this.weatherCondition = forecast;
  }
}
