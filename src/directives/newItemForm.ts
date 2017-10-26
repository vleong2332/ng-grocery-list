import { DataService } from '../services/dataService';
import '../style/newItemForm.less'

export default function newItemForm() {
  return {
    restrict: 'E',
    scope: {},
    controllerAs: 'vm',
    controller,
    template,
    replace: true,
  };
}

function controller(dataService: DataService) {
  let vm = this;
  vm.newItemName = '';
  vm.addNewItem = addNewItem;

  function addNewItem(): void {
    if (vm.newItemName.trim() !== '') {
      dataService.addItem(vm.newItemName);
      vm.newItemName = '';
    }
  }
}

const template = `
  <div class="new-item-form" layout="row" layout-align="center center">

    <div class="new-item-name-wrapper" flex>
      <md-input-container class="new-item-name" md-no-float>
        <input type="text" ng-model="vm.newItemName" placeholder="Add a new item" />
      </md-input-container>
    </div>

    <div class="new-item-add-wrapper" flex="none">
      <md-button class="new-item-add md-raised md-primary" aria-label="Add" ng-click="vm.addNewItem()">
        Add
      </md-button>
    </div>

  </div>
`;
