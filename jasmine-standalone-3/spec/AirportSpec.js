describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });
  
  it('lands a plane', function() {
    expect(airport.land(plane)).toEqual("plane landed");
  });
  it('lets a plane take off', function() {
    expect(airport.takeoff(plane)).toEqual("plane has left the airport");
  });
});
