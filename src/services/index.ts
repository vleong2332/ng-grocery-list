import testService  from './testService';

export default {
  registerTo: function(ngModule: angular.IModule) {
    ngModule.factory('testService', testService);
  },
};
