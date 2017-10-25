import { DataService } from '../services/dataService';

interface ParentScope extends angular.IScope {
  refreshItems: () => void;
}

function item() {
  return {
    scope: {
      id: '=',
      name: '=',
      isPurchased: '=',
      refreshItems: '=',
    },
    controllerAs: 'vm',
    controller,
    link,
    template,
    replace: true,
  };
};

function controller(dataService: DataService, $scope: ParentScope) {
  let vm = this;
  vm.isEditable = false;
  vm.toggleItem = toggleItem;
  vm.removeItem = removeItem;
  vm.editName = editName;
  vm.saveName = saveName;

  function toggleItem(itemId: number): void {
    dataService.toggleItem(itemId);
    $scope.refreshItems();
  }

  function removeItem(itemId: number): void {
    dataService.removeItem(itemId);
    $scope.refreshItems();
  }

  function editName(): void {
    vm.isEditable = true;
    vm.focusOnName();
  }

  function saveName(itemId: number): void {
    vm.isEditable = false;
    const newName = vm.getItemName();
    dataService.editItem(itemId, newName);
    $scope.refreshItems();
  }
}

// TODO: Typings
function link(scope, el, attrs) {
  scope.vm.getItemName = function() {
    return el.children()[0].innerText;
  };
  scope.vm.focusOnName = function() {
    el.children()[0].focus();
  };
}

const template = `
  <div ng-class="{ item: true, 'is-purchased': isPurchased }">
    <input type="text" class="item-name" ng-model="name" />
    <span ng-click="vm.toggleItem(id)">Toggle</span>
    <span ng-click="vm.removeItem(id)">Delete</span>
  </div>
`;

export default item;
