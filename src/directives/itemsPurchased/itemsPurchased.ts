import { ItemsService } from '../../services/itemsService';
import './itemsPurchased.less';

export default function itemsPurchased(): angular.IDirective {
  return {
    restrict: 'E',
    controllerAs: 'vm',
    controller,
    template,
  };
};

function controller(itemsService: ItemsService, $scope: angular.IScope) {
  let vm = this;
  vm.items;

  $scope.$watch(
    () => itemsService.getNeeded().length,
    () => {
      updateItems();
    },
    true,
  );

  function updateItems(): void {
    vm.items = itemsService.getPurchased();
  }
}

const template = `
  <div class="items-purchased" layout="column" layout-align="center stretch">

    <div class="item-count-wrapper" layout="row" layout-align="center">
      <h3>{{ vm.items.length }} items purchased</h3>
    </div>

    <item-list items="vm.items"></item-list>
  </div>
`;
