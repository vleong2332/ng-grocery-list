import * as angular from 'angular';
import 'angular-route';
import 'angular-material';

import configs from './configs';
import controllers from './controllers';
import services from './services';
import directives from './directives';

import './index.less';
import 'angular-material/angular-material.css';

(() => {
  const ngModule = angular.module('app', ['ngRoute', 'ngMaterial']);

  configs.registerTo(ngModule);
  controllers.registerTo(ngModule);
  services.registerTo(ngModule);
  directives.registerTo(ngModule);
})();
