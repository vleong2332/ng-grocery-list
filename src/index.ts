import * as angular from 'angular';
import directives from './directives';
import services from './services';

(() => {
  const ngModule = angular.module('app', []);

  services.registerTo(ngModule);
  directives.registerTo(ngModule);
})();
