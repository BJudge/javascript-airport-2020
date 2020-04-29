describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport(2);
    plane = jasmine.createSpy('plane'); //change to a jasmine spy
  });
  describe('during bad weather', function() {
    it('will not allow a plane to take off in stormy weather', function() {
      expect(airport.takeoff(plane, 'STORMY')).toEqual("Unable to take off due to bad weather");
    });
    it('will not allow a plane to land in stormy weather', function() {
      expect(airport.land(plane, 'STORMY')).toEqual("Unable to land due to bad weather");
    });
  });

  describe('during good weather', function() {
    it('lands a plane', function() {
      expect(airport.land(plane, 'NOT-STORMY')).toEqual("plane landed");
    });
    it('lets a plane take off', function() {
      expect(airport.takeoff(plane, 'NOT-STORMY')).toEqual("plane has left the airport");
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
});
