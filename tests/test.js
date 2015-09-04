var mocha = require('mocha');
var expect = require('chai').expect;
var deduplicate = require('../deduplicate');

describe('deduplicate function', function() {

  var dummyArray = ['apples', 'oranges', 'apples', 'banana', 'mango', 'Mango', 'mango', 'banana', 'apple'];
  var result = deduplicate(dummyArray);

  it('should remove duplicates --case insensitive', function() {
    expect(result.uniqueArr).to.eql(['apples', 'oranges','banana', 'mango', 'apple']);
  });

  it('should keep array in the same order', function() {
    expect(result.uniqueArr[0]).to.eql('apples');
  });
})
