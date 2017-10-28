import { DataService, Item } from '../services/dataService';
import '../style/itemList.less';

export default function itemList() {
  return {
    restrict: 'E',
    scope: {
      items: '=',
    },
    template: `
      <md-list class="item-list">
        <item
          ng-repeat="item in items"
          class="item-list-item"
          id="item.id"
          name="item.text"
          is-purchased="item.isPurchased"
          flex
        />
      </md-list>
    `,
  };
};
