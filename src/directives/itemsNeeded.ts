import { DataService, Item } from '../services/dataService';

const itemsNeeded = function() {
  // require('./kcd-hello.less');
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
  };
};

const template = `
  <div class="items-needed">
    <h1>Items Needed</h1>
    <item-list
      items="vm.items"
      refresh-items="vm.refreshItems()"
    ></item-list>
    <button ng-click="vm.goToPurchasedItems()">Purchased Items</button>
  </div>
`;

function controller(dataService: DataService, $location: angular.ILocationService) {
  let vm = this;
  vm.items = [];
  vm.refreshItems = refreshItems;
  vm.goToPurchasedItems = goToPurchasedItems;

  refreshItems();

  function refreshItems(): void {
    vm.items = dataService.getNeededItems();
  }

  function goToPurchasedItems(): void {
    console.log('go to purchased items', $location);
    $location.path('/bought');
  }
}

export default itemsNeeded;
