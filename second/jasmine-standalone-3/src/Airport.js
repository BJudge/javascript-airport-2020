class Airport {

  constructor(capacity) {
    this.DEFAULTCAPACITY = capacity || 2;
    this.hangar = [];
  }

  land(landingPlane) {
    if (this.hangar.length + 1 > this.DEFAULTCAPACITY) {
      return "Sorry Airport Full";
    }
    this.hangar.push(landingPlane)
    return "Plane landed succesfully";
  }

  takeoff(leavingPlane) {
    var positionOfPlane = this.hangar.indexOf(leavingPlane);
    if (positionOfPlane > -1) {
      this.hangar.splice(positionOfPlane, 1);
      return 'Plane has succesfully taken off';
    }
  }
}
