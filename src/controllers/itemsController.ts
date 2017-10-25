import { DataService, Item } from '../services/dataService';

export default function controller(dataService: DataService, $scope: angular.IScope) {
  let vm = this;
  vm.neededItems = [];
  vm.purchasedItems = [];
  vm.refreshItems = refreshItems;

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
