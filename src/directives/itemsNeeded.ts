import { DataService } from '../services/dataService';

const itemsNeeded = function() {
  // require('./kcd-hello.less');
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
  };
};

const template = `
  <div class="items-needed">
    <h1>Items Needed</h1>
    <ul class="item-list>"
      <li class="item" ng-repeat="item in vm.items">
        <div>{{item.id}} - {{item.text}} - {{item.isPurchased}}</div>
      </li>
    </ul>
  </div>
`;

function controller(dataService: DataService) {
  let vm = this;
  vm.items = dataService.getNeededItems();
}

export default itemsNeeded;
