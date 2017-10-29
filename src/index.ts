import * as angular from 'angular';
import 'angular-route';
import 'angular-material';

import registerConfigs from './configs';
import registerControllers from './controllers';
import services from './services';
import registerDirectives from './directives';

import './index.less';
import 'angular-material/angular-material.css';

(() => {
  const ngModule = angular.module('app', ['ngRoute', 'ngMaterial']);

  registerConfigs(ngModule);
  registerControllers(ngModule);
  services.registerTo(ngModule);
  registerDirectives(ngModule);
})();
