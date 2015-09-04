'use strict'

require('angular/angular');

var dedupApp = angular.module('dedupApp', []);

require('./controllers/main-controller')(dedupApp);
