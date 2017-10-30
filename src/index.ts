import * as angular from 'angular';

import registerConfigs from './configs';
import registerServices from './services';
import registerDirectives from './directives';

import 'angular-material/angular-material.css';
import './index.less';

(() => {
  'use strict';

  const ngModule = angular.module('app', [
    require('angular-route'),
    require('angular-material'),
  ]);

  registerConfigs(ngModule);
  registerServices(ngModule);
  registerDirectives(ngModule);
})();
