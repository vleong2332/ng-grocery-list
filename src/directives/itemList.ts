import { DataService, Item } from '../services/DataService';

const itemList = {
  bindings: {
    items: '=',
    refreshItems: '&',
  },
  controller: function controller (dataService: DataService) {
    this.toggleItem = toggleItem;
    this.removeItem = removeItem;

    function toggleItem(itemId: number): void {
      dataService.toggleItem(itemId);
      this.refreshItems();
    }

    function removeItem(itemId: number): void {
      dataService.removeItem(itemId);
      this.refreshItems();
    }
  },
  template: `
    <ul class="item-list">
      <li class="item" ng-repeat="item in $ctrl.items">
        <div>
          {{item.text}}
          <span ng-click="$ctrl.toggleItem(item.id)">Toggle</span>
          <span ng-click="$ctrl.removeItem(item.id)">Delete</span>
        </div>
      </li>
    </ul>
  `,
};

export default itemList;
