var adapter = require('../lib/adapter'),
    _ = require('underscore'),
    should = require('should'),
    support = require('./support/bootstrap');

describe('adapter', function() {

  /**
   * Setup and Teardown
   */

  before(function(done) {
    support.Setup('test_describe', done);
  });

  after(function(done) {
    support.Teardown('test_describe', done);
  });

  /**
   * DESCRIBE
   *
   * Similar to MySQL's Describe method this should list the
   * properties of a table.
   */

  describe('.describe()', function() {

    // Register the collection
    before(function(done) {
      var collection = _.extend(support.Config, {
        identity: 'test_describe'
      });

      adapter.registerCollection(collection, done);
    });

    // Output Column Names
    it('should output the column names', function(done) {
      adapter.describe('test_describe', function(err, results) {
        Object.keys(results).length.should.eql(3);

        should.exist(results.id);
        should.exist(results.field_1);
        should.exist(results.field_2);

        done();
      });
    });

  });
});