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
    <h1>Items Needed - {{ vm.items.length }}</h1>
    <item-list
      items="vm.items"
      refresh-items="vm.refreshItems"
    ></item-list>
    <button ng-click="vm.goToPurchasedItems()">Purchased Items</button>
  </div>
`;

function controller(dataService: DataService, $location: angular.ILocationService, $scope: angular.IScope) {
  let vm = this;
  vm.items = [];
  vm.refreshItems = refreshItems.bind(this);
  vm.goToPurchasedItems = goToPurchasedItems;

  refreshItems();

  function refreshItems(): void {
    vm.items = dataService.getNeededItems();
  }

  function goToPurchasedItems(): void {
    $location.path('/bought');
  }
}

export default itemsNeeded;
