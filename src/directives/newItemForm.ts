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
  vm.newItemName;
  vm.addNewItem = addNewItem;
  vm.handleKeypress = handleKeypress;

  resetName();

  function resetName(): void {
    vm.newItemName = null;
  }

  function addNewItem(): void {
    vm.newItemName && dataService.addItem(vm.newItemName);
    resetName();
  }

  function handleKeypress($event): void {
    $event.key === 'Enter' && addNewItem();
  }
}

const template = `
  <div class="new-item-form" layout="row" layout-align="center center">

    <div class="new-item-name-wrapper" flex>
      <md-input-container class="new-item-name" md-no-float>
        <input
          type="text"
          ng-model="vm.newItemName"
          ng-keypress="vm.handleKeypress($event)"
          placeholder="Add a new item"
        />
      </md-input-container>
    </div>

    <div class="new-item-add-wrapper" flex="none">
      <md-button
        class="new-item-add md-fab md-mini md-raised md-primary"
        aria-label="Add"
        ng-click="vm.addNewItem()"
      >
        <md-icon>add</md-icon>
      </md-button>
    </div>

  </div>
`;
