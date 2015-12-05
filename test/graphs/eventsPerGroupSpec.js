'use strict';

var expect = require('chai').expect;
var eventPerGroupLib = require('../../graphs/eventsPerGroup');

describe('Graph for Events per User Group', function() {
  describe('#removeLocationString', function() {
    it('removes "Singapore "', function() {
      var input = [
        {
          group: 'Singapore Ruby Group',
          url: 'url'
        }
      ];

      expect(input[ 0 ].group).to.contain('Singapore ')

      var reply = eventPerGroupLib.removeLocationString(input);

      expect(reply[ 0 ].group).to.not.contain('Singapore ')
    })
  })
})