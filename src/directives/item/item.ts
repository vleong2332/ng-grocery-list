import { ItemsService } from '../../services/itemsService';
import './item.less';

interface ItemScope extends angular.IScope {
  id: number;
  name: string;
  isPurchased: boolean;
}

export default function item(): angular.IDirective {
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

controller.$inject = ['itemsService', '$scope'];
function controller(itemsService: ItemsService, $scope: ItemScope) {
  let vm = this;
  vm.elevation = 1;
  vm.inEditMode = false;
  vm.toggle = itemsService.toggle;
  vm.remove = itemsService.remove;
  vm.handleNameFocus = handleNameFocus;
  vm.onBlur = handleNameBlur;

  function handleNameFocus(): void {
    if (!$scope.isPurchased) {
      vm.inEditMode = true;
    }
  }

  function handleNameBlur(): void {
    if ($scope.name === '') {
      itemsService.remove($scope.id);
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

    <div class="item-toggle-wrapper" flex="none">
      <md-checkbox
        class="item-toggle"
        ng-model="isPurchased"
        ng-click="vm.toggle(id)"
        aria-label="Toggle Item"
      ></md-checkbox>
    </div>

    <div class="item-name-wrapper" flex>
      <div
        class="item-name"
        contenteditable="{{ !isPurchased }}"
        blur-on-enter
        ng-model="name"
        ng-focus="vm.handleNameFocus()"
      >
        {{ name }}
      </div>
    </div>

    <div class="item-delete-wrapper" flex="none">
      <md-button class="item-delete md-icon-button md-secondary" ng-click="vm.remove(id)">
        <md-icon class="item-delete-icon">delete</md-icon>
      </md-button>
    </div>

  </md-list-item>
`;
