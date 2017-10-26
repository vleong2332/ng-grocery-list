import { DataService, Item } from '../services/dataService';

interface ItemScope extends angular.IScope {
  items: Item[];
}

export default function itemsNeeded() {
  return {
    restrict: 'E',
    scope: {
      items: '=',
    },
    controllerAs: 'vm',
    controller: function($scope: ItemScope) {
      let vm = this;
      vm.message;

      getMessage();

      $scope.$watch(
        () => $scope.items.length,
        (newVal, oldVal) => {
          getMessage();
        },
        true
      );

      function getMessage() {
        vm.message = $scope.items.length > 0
          ? `${$scope.items.length} items left`
          : 'All done!';
      }
    },
    template: `
      <div class="items-needed" layout="column" layout-align="center stretch">

        <new-item-form></new-item-form>

        <div class="item-count-wrapper" layout="row" layout-align="center center">
          <h3 class="item-count md-title">{{ vm.message }}</h3>
        </div>

        <item-list items="items"></item-list>
      </div>
    `,
  };
}
