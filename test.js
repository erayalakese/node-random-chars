var assert = require('chai').assert;
var hash = require("./index");

describe('#create', function() {
    it('should return a hash with provided length', function () {
      assert.lengthOf(hash.c(32), 32);
      assert.lengthOf(hash.create(32), 32);
    });
});