import { ItemsService, Item } from '../../services/itemsService';

interface ParentScope extends angular.IScope {
  items: Item[];
}

export default function itemsNeeded(): angular.IDirective {
  return {
    restrict: 'E',
    scope: {
      items: '=',
    },
    controllerAs: 'vm',
    controller,
    template,
  };
}

function controller($scope: ParentScope): void {
  let vm = this;
  vm.message;

  $scope.$watch(
    () => $scope.items.length,
    (newVal, oldVal) => {
      udpateMessage(newVal, oldVal);
    },
    true
  );

  function udpateMessage(newVal?: number, oldVal?: number): void {
    const isInitial = oldVal === 0 && newVal === 0;
    const isDone = oldVal > 0 && newVal === 0;

    vm.message = isInitial
      ? 'No items needed'
      : isDone
        ? 'All done!'
        : `${$scope.items.length} items left`;
  }
}

const template = `
  <div class="items-needed" layout="column" layout-align="center stretch">

    <new-item-form></new-item-form>

    <div class="item-count-wrapper" layout="row" layout-align="center center">
      <h3 class="item-count md-title">{{ vm.message }}</h3>
    </div>

    <item-list items="items"></item-list>
  </div>
`;
