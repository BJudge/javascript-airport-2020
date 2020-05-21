describe('airport', function() {
  var airport;
  var plane;

  beforeAll(function() {
    airport = new Airport();
    plane = new Plane();
  })

  afterEach(function() {
    airport.hangar = []
  })

  it('allows planes to land', function() {
    expect(airport.land(plane)).toEqual("Plane landed succesfully");
  })
  it('allows planes to take off', function() {
    airport.land(plane);
    expect(airport.takeoff(plane)).toEqual( 'Plane has succesfully taken off');
  })
  it('will not allow planes to land when full', function() {
    let plane2 = new Plane();
    let plane3 = new Plane();
    airport.land(plane)
    airport.land(plane2)
    expect(airport.land(plane3)).toEqual("Sorry Airport Full");
  })
  it('has a default hangar capacity', function() {
    expect(airport.DEFAULTCAPACITY).toEqual(2);
  })
  it('can have a unique hangar capcity', function() {
    airport2 = new Airport(7);
    expect(airport2.DEFAULTCAPACITY).toEqual(7);
  })
})
