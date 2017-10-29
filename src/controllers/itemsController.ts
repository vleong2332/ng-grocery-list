import { ItemsService, Item } from '../services/itemsService';

export default function itemsController(itemsService: ItemsService, $scope: angular.IScope): void {
  let vm = this;
  vm.neededItems = [];
  vm.purchasedItems = [];

  refreshItems();

  $scope.$watch(
    () => itemsService.getAll(),
    () => {
      refreshItems();
    },
    true
  );

  function refreshItems(): void {
    vm.neededItems = itemsService.getNeeded();
    vm.purchasedItems = itemsService.getPurchased();
  }
}
