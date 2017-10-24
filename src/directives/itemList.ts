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
        <item
          name="item.text"
          on-toggle="$ctrl.toggleItem(item.id)"
          on-delete="$ctrl.removeItem(item.id)"
        />
      </li>
    </ul>
  `,
};

export default itemList;
