import { DataService, Item } from '../services/dataService';

const itemList = function() {
  // require('./kcd-hello.less');
  return {
    restrict: 'E',
    scope: false,
    template,
  };
};

const template = `
  <ul class="item-list">
    <li
      class="item"
      ng-repeat="item in vm.items"
      ng-click="vm.onItemClick(item)"
    >
      <div>{{item.id}} - {{item.text}} - {{item.isPurchased}}</div>
    </li>
  </ul>
`;

export default itemList;
