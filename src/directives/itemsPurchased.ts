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
      on-item-click="vm.onItemClick"
    ></item-list>
  </div>
`;

function controller(dataService: DataService) {
  let vm = this;
  vm.items = [];
  vm.onItemClick = onItemClick;

  refreshItems();

  function refreshItems(): void {
    vm.items = dataService.getPurchasedItems();
  }

  function onItemClick(item: Item) {
    dataService.toggleItem(item.id);
    refreshItems();
  }
}

export default itemsPurchased;
