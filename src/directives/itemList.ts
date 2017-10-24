import { DataService, Item } from '../services/DataService';

interface ItemListScope extends angular.IScope{
  items: Item[];
  refreshItems: () => void;
}

const itemList = function() {
  // require('./kcd-hello.less');
  return {
    restrict: 'E',
    scope: {
      items: '=',
      refreshItems: '&',
    },
    template,
    controller,
    controllerAs: 'vm',
  };
};

const template = `
  <ul class="item-list">
    <li
      class="item"
      ng-repeat="item in items"
    >
      <div>
        {{item.text}}
        <span ng-click="vm.toggleItem(item.id)">Toggle</span>
        <span ng-click="vm.removeItem(item.id)">Delete</span>
      </div>
    </li>
  </ul>
`;

function controller (dataService: DataService, $scope: ItemListScope) {
  let vm = this;
  vm.toggleItem = toggleItem;
  vm.removeItem = removeItem;

  function toggleItem(itemId: number): void {
    console.log('toggleItem', itemId);
    dataService.toggleItem(itemId);
    $scope.refreshItems();
  }

  function removeItem(itemId: number): void {
    console.log('removing item', itemId);
    dataService.removeItem(itemId);
    $scope.refreshItems();
  }
}

export default itemList;
