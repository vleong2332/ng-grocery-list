import { ItemsService, Item } from '../../services/itemsService';

export default function itemsNeeded(): angular.IDirective {
  return {
    restrict: 'E',
    controllerAs: 'vm',
    controller,
    template,
  };
}

controller.$inject = ['itemsService', '$scope'];
function controller(itemsService: ItemsService, $scope: angular.IScope): void {
  let vm = this;
  vm.items;
  vm.message;

  $scope.$watch(
    () => itemsService.getNeeded().length,
    (newVal, oldVal) => {
      updateItems();
      udpateMessage(newVal, oldVal);
    },
    true,
  );

  function updateItems(): void {
    vm.items = itemsService.getNeeded();
  }

  function udpateMessage(newVal?: number, oldVal?: number): void {
    const isInitial = oldVal === 0 && newVal === 0;
    const isDone = oldVal > 0 && newVal === 0;

    vm.message = isInitial
      ? 'No items needed'
      : isDone
        ? 'All done!'
        : `${vm.items.length} items left`;
  }
}

const template = `
  <div class="items-needed" layout="column" layout-align="center stretch">

    <new-item-form></new-item-form>

    <div class="item-count-wrapper" layout="row" layout-align="center center">
      <h3 class="item-count md-title">{{ vm.message }}</h3>
    </div>

    <item-list items="vm.items"></item-list>
  </div>
`;
