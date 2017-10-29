import itemsService from './itemsService';

export default {
  registerTo: function(ngModule: angular.IModule) {
    ngModule.factory('itemsService', itemsService);
  },
};
