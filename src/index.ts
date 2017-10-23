import * as angular from 'angular';
import 'angular-route';

import configs from './configs';
import controllers from './controllers';
import services from './services';
import directives from './directives';

(() => {
  const ngModule = angular.module('app', ['ngRoute']);

  configs.registerTo(ngModule);
  controllers.registerTo(ngModule);
  services.registerTo(ngModule);
  directives.registerTo(ngModule);
})();
