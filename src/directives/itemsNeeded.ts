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
//   vm.isAllDone = $scope.items.length <= 0;
//   console.log($scope.items)
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
    <h3 class="item-count" ng-show="items.length > 0">{{ items.length }} left</h3>
    <h3 class="item-count" ng-show="items.length <= 0">All done!</h3>
    <item-list
      items="items"
      refresh-items="refreshItems"
    ></item-list>
  </div>
`;

export default itemsNeeded;
