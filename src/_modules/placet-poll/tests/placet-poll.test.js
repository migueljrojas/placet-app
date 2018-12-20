'use strict';

var PlacetPoll = require('../placet-poll');

describe('PlacetPoll View', function() {

  beforeEach(function() {
    this.placetPoll = new PlacetPoll();
  });

  it('Should run a few assertions', function() {
    expect(this.placetPoll);
  });

});
