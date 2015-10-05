'use strict';

describe('Core Services', function() {
  var _;

  beforeEach(module('compound'));

  beforeEach(inject(function(___) {
    _ = ___;
  }));

  it('Lodash should be defined', function() {
    expect(_.each).toBeDefined();
  });
});
