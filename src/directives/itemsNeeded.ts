import { DataService, Item } from '../services/dataService';

export default function itemsNeeded() {
  return {
    restrict: 'E',
    scope: {
      items: '=',
    },
    template: `
      <div class="items-needed">
        <h3 class="item-count" ng-show="items.length > 0">{{ items.length }} left</h3>
        <h3 class="item-count" ng-show="items.length <= 0">All done!</h3>
        <new-item-form></new-item-form>
        <item-list items="items"></item-list>
      </div>
    `,
  };
}
