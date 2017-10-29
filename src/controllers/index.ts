import itemsController from './itemsController';

export default function registerControllers(ngModule: angular.IModule): void {
  ngModule.controller('itemsController', itemsController);
}
