import { DataService, Item } from '../services/dataService';

const itemsNeeded = function() {
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

// function controller($scope) {
//   let vm = this;
//   vm.neededItems = $scope.items.filter(i => !i.isPurchased);
//   console.log(this, $scope);
//   // let vm = this;
//   // vm.items = $scope.items;
//   // vm.refreshItems = $scope.refreshItems;
//   // vm.items = [];
//   // vm.refreshItems = refreshItems;
//   //
//   // refreshItems();
//   //
//   // function refreshItems(): void {
//   //   vm.items = dataService.getNeededItems();
//   // }
// }

const template = `
  <div class="items-needed">
    <h1>Items Needed - {{ items.length }}</h1>
    <item-list
      items="items"
      refresh-items="refreshItems"
    ></item-list>
  </div>
`;

export default itemsNeeded;
