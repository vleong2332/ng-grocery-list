import { DataService } from '../services/dataService';

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
  <div ng-class="{ item: true, 'is-purchased': isPurchased }">
    <input type="text" class="item-name" ng-model="name" />
    <span ng-click="vm.toggleItem(id)">Toggle</span>
    <span ng-click="vm.removeItem(id)">Delete</span>
  </div>
`;

export default item;
