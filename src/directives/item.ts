import { DataService } from '../services/dataService';
import '../style/item.less';

interface ItemScope extends angular.IScope {
  id: number;
  name: string;
  isPurchased: boolean;
}

export default function item() {
  return {
    require: 'contenteditable',
    scope: {
      id: '=',
      name: '=',
      isPurchased: '=',
    },
    controllerAs: 'vm',
    controller,
    template,
  };
};

function controller(dataService: DataService, $scope: ItemScope) {
  let vm = this;
  vm.elevation = 1;
  vm.inEditMode = false;
  vm.toggleItem = dataService.toggleItem;
  vm.removeItem = dataService.removeItem;
  vm.handleNameFocus = handleNameFocus;
  vm.onBlur = handleNameBlur;

  function handleNameFocus(): void {
    if (!$scope.isPurchased) {
      vm.inEditMode = true;
    }
  }

  function handleNameBlur(): void {
    if ($scope.name === '') {
      dataService.removeItem($scope.id);
    } else {
      vm.inEditMode = false;
    }
  }
}

const template = `
  <md-list-item
    class="item md-no-proxy"
    layout="row"
    layout-align="center center"
    flex
    ng-class="{ 'is-editting': vm.inEditMode }"
    md-whiteframe="{{ vm.elevation }}"
    ng-mouseover="vm.elevation = vm.elevation + 2"
    ng-mouseleave="vm.elevation = 1"
  >

    <div class="item-toggle-wrapper" flex="none" layout="row" layout-align="center center">
      <md-checkbox
        class="item-toggle"
        ng-model="isPurchased"
        ng-click="vm.toggleItem(id)"
        aria-label="Toggle Item"
      ></md-checkbox>
    </div>

    <div class="item-name-wrapper" flex>
      <div
        class="item-name"
        tabindex="1"
        contenteditable="{{ !isPurchased }}"
        blur-on-enter
        ng-model="name"
        ng-focus="vm.handleNameFocus()"
        ng-disabled="isPurchased"
      >
        <pre>{{ name }}</pre>
      </div>
    </div>

    <div class="item-delete-wrapper" flex="none">
      <md-button class="item-delete md-icon-button md-secondary" ng-click="vm.removeItem(id)">
        <md-icon class="item-delete-icon">delete</md-icon>
      </md-button>
    </div>

  </md-list-item>
`;
