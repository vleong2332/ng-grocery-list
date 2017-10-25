import { DataService, Item } from '../services/dataService';

export default function itemList() {
  return {
    restrict: 'E',
    scope: {
      items: '=',
    },
    template: `
      <ul class="item-list">
        <li class="item" ng-repeat="item in items">
          <item
            id="item.id"
            name="item.text"
            is-purchased="item.isPurchased"
          />
        </li>
      </ul>
    `,
  };
};
