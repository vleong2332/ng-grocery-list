import { ItemsService, Item } from '../../services/itemsService';
import './itemList.less';

export default function itemList(): angular.IDirective {
  return {
    restrict: 'E',
    scope: {
      items: '=',
    },
    template: `
      <md-list class="item-list" layout="column" layout-align="center stretch">
        <item
          class="item-list-item"
          flex
          ng-repeat="item in items"
          id="item.id"
          name="item.text"
          is-purchased="item.isPurchased"
        />
      </md-list>
    `,
  };
};
