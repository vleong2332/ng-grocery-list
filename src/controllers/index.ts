import itemsController from './itemsController';

export default {
  registerTo: function(ngModule: angular.IModule) {
    ngModule.controller('itemsController', itemsController);
  },
};
