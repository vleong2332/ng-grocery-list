import { DataService, Item } from '../services/dataService';

export default function itemsController(dataService: DataService, $scope: angular.IScope) {
  let vm = this;
  vm.neededItems = [];
  vm.purchasedItems = [];

  refreshItems();

  $scope.$watch(
    () => dataService.getAllItems(),
    (newVal, oldVal) => { refreshItems(); },
    true
  );

  function refreshItems(): void {
    vm.neededItems = dataService.getNeededItems();
    vm.purchasedItems = dataService.getPurchasedItems();
  }
}
