import itemsService from './itemsService';

export default function registerServices(ngModule: angular.IModule) {
  ngModule.factory('itemsService', itemsService);
}
