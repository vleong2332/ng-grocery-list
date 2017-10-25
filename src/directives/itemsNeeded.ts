import { DataService, Item } from '../services/dataService';

const itemsNeeded = function() {
  // require('./kcd-hello.less');
  return {
    restrict: 'E',
    scope: {
      items: '=',
      refreshItems: '=',
    },
    template,
  };
};

const template = `
  <div class="items-needed">
    <h3 class="item-count" ng-show="items.length > 0">{{ items.length }} left</h3>
    <h3 class="item-count" ng-show="items.length <= 0">All done!</h3>

    <new-item-form></new-item-form>

    <item-list
      items="items"
      refresh-items="refreshItems"
    ></item-list>
  </div>
`;

export default itemsNeeded;
