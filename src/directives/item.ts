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
}

const template = `
  <div class="item">
    <p class="item-name" contenteditable="{{!!vm.isEditable}}">{{name}}</p>
    <span ng-click="vm.toggleItem(id)">Toggle</span>
    <span ng-click="vm.removeItem(id)">Delete</span>
    <span ng-hide="vm.isEditable" ng-click="vm.editName()">Edit</span>
    <span ng-show="vm.isEditable" ng-click="vm.saveName(id)">Save</span>
  </div>
`;

export default item;
