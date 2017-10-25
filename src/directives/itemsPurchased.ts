import { DataService, Item } from '../services/dataService';

const itemsPurchased = function() {
  // require('./kcd-hello.less');
  return {
    restrict: 'E',
    scope: {
      items: '=',
      refreshItems: '=',
    },
    // controllerAs: 'vm',
    // controller,
    template,
  };
};

// function controller(dataService: DataService, $location: angular.ILocationService) {
//   let vm = this;
//   vm.items = [];
//   vm.refreshItems = refreshItems;
//
//   refreshItems();
//
//   function refreshItems(): void {
//     vm.items = dataService.getPurchasedItems();
//   }
// }

const template = `
  <div class="items-purchased">
    <h1>Items Purchased - {{ items.length }}</h1>
    <item-list
      items="items"
      refresh-items="refreshItems"
    ></item-list>
  </div>
`;

export default itemsPurchased;
