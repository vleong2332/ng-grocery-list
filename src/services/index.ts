import dataService from './dataService';

export default {
  registerTo: function(ngModule: angular.IModule) {
    ngModule.factory('dataService', dataService);
  },
};
