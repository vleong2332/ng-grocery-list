import { DataService, Item } from '../services/DataService';

const itemList = {
  bindings: {
    items: '=',
    refreshItems: '=',
  },
  template: `
    <ul class="item-list">
      <li class="item" ng-repeat="item in $ctrl.items">
        <item
          id="item.id"
          name="item.text"
          is-purchased="item.isPurchased"
          refresh-items="$ctrl.refreshItems"
        />
      </li>
    </ul>
  `,
};

export default itemList;
