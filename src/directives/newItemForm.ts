import { DataService } from '../services/dataService';

const newItemForm = function() {
  // require('./kcd-hello.less');
  return {
    restrict: 'E',
    scope: {},
    controllerAs: 'vm',
    controller,
    template,
  };
};

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
  <div class="new-item">
    <input class="new-item-name" type="text" ng-model="vm.newItemName" />
    <button class="new-item-add" ng-click="vm.addNewItem()">Add</button>
  </div>
`;

export default newItemForm;
