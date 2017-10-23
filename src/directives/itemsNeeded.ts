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
    vm.items = dataService.getNeededItems();
  }

  function onItemClick(item: Item) {
    dataService.toggleItem(item.id);
    refreshItems();
  }
}

export default itemsNeeded;
