describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport(2);
    plane = new Plane(); //change to a jasmine spy
  });

  it('lands a plane', function() {
    expect(airport.land(plane)).toEqual("plane landed");
  });
  it('lets a plane take off', function() {
    expect(airport.takeoff(plane)).toEqual("plane has left the airport");
  });

  it('will not allow more than two planes to land', function() {
    plane2 = new Plane();
    plane3 = new Plane();
    airport.land(plane)
    airport.land(plane2)
    expect(airport.land(plane3)).toEqual("Unable to Land. Airport Full");
  });
  it('allows a plane limit at creation.', function() {
    expect(airport.limit).toEqual(2);
  });
});
