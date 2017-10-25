import { DataService } from '../services/dataService';

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
  <div ng-class="{ item: true, 'is-purchased': isPurchased }">
    <input type="text" class="item-name" ng-model="name" />
    <span ng-click="vm.toggleItem(id)">Toggle</span>
    <span ng-click="vm.removeItem(id)">Delete</span>
  </div>
`;
