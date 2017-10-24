import { DataService, Item } from '../services/dataService';

const itemsPurchased = function() {
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
  <div class="items-purchased">
    <h1>Items Purchased</h1>
    <item-list
      items="vm.items"
      refresh-items="vm.refreshItems()"
    ></item-list>
    <button ng-click="vm.goToNeededItems()">Needed Items</button>
  </div>
`;

function controller(dataService: DataService, $location: angular.ILocationService) {
  let vm = this;
  vm.items = [];
  vm.refreshItems = refreshItems;
  vm.goToNeededItems = goToNeededItems;

  refreshItems();

  function refreshItems(): void {
    vm.items = dataService.getPurchasedItems();
  }

  function goToNeededItems(): void {
    $location.path('/');
  }
}

export default itemsPurchased;
