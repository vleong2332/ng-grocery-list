import { DataService } from '../services/dataService';
import '../style/item.less';

export default function item() {
  return {
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

function controller(dataService: DataService) {
  let vm = this;
  vm.isEditable = false;
  vm.toggleItem = dataService.toggleItem;
  vm.removeItem = dataService.removeItem;
}

const template = `
  <div class="item" ng-class="{ 'is-purchased': isPurchased }" layout="row" layout-align="center center" flex>
    <div class="item-toggle-wrapper" flex="none" layout="row" layout-align="center center">
      <md-checkbox class="item-toggle" ng-model="isPurchased" ng-click="vm.toggleItem(id)"></md-checkbox>
    </div>
    <div class="item-name-wrapper" flex>
      <input type="text" class="item-name" ng-model="name" />
    </div>
    <div class="item-delete-wrapper" flex="none">
      <span class="item-delete md-secondary" ng-click="vm.removeItem(id)">Delete</span>
    </div>
  </div>
`;
