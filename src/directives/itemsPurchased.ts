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
  </div>
`;

function controller(dataService: DataService) {
  let vm = this;
  vm.items = [];
  vm.refreshItems = refreshItems;

  refreshItems();

  function refreshItems(): void {
    vm.items = dataService.getPurchasedItems();
  }
}

export default itemsPurchased;
