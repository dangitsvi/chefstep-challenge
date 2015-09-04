'use strict'

var generateEmails = require('../../generate-emails');
var deduplicate = require('../../deduplicate');

module.exports = function(app) {
  app.controller('mainController', ['$scope', function($scope) {

    $scope.emails = [];
    $scope.uniques = [];
    $scope.duplicates = [];
    $scope.num = 10000;

    $scope.generate = function(num) {
      $scope.emails = generateEmails(num);
      $scope.num = null;
    };

    $scope.addEmail = function(email) {
      $scope.emails.push(email);
      $scope.email = null;
    };

    $scope.clearEmails = function() {
      $scope.emails = [];
      $scope.uniques = [];
      $scope.duplicates = [];
    }

    $scope.deduplicate = function(emails) {
      var result = deduplicate(emails);
      $scope.uniques = result.uniqueArr;
      $scope.duplicates = result.duplicatesArr;
    }
  }]);
}
