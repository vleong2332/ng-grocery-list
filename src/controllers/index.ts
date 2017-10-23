import ItemsController from './ItemsController';

export default {
  registerTo: function(ngModule: angular.IModule) {
    ngModule.controller('ItemsController', ItemsController);
  },
};
