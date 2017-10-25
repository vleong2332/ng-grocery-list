import { DataService, Item } from '../services/dataService';

export default function controller(dataService: DataService) {
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
