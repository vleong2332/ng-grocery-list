import { DataService, Item } from '../services/dataService';

interface ItemScope extends angular.IScope {
  items: Item[];
  refreshItems: () => void;
  gotoPurchasedItems: () => void;
  gotoNeededItems: () => void;
}

export default function controller(
  dataService: DataService,
  $location: angular.ILocationService,
  $scope: ItemScope
) {
  let vm = this;
  vm.neededItems = [];
  vm.purchasedItems = [];
  vm.refreshItems = refreshItems;

  refreshItems();

  function refreshItems(): void {
    vm.neededItems = dataService.getNeededItems();
    vm.purchasedItems = dataService.getPurchasedItems();
  }
}
