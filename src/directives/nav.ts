const nav = function() {
  return {
    restrict: 'E',
    scope: {},
    controllerAs: 'vm',
    controller,
    template,
    replace: true,
  };
};

function controller($scope: angular.IScope, $location:angular.ILocationService) {
  this.gotoNeededItems = gotoNeededItems;
  this.gotoPurchasedItems = gotoPurchasedItems;
  this.active = $location.path();

  function gotoPurchasedItems(): void {
    $location.path('/bought');
    this.active = '/bought';
  }

  function gotoNeededItems(): void {
    $location.path('/');
    this.active = '/';
  }
}

const template = `
  <div class="nav">
    <button
      ng-click="vm.gotoNeededItems()"
      ng-class="{ active: vm.active === '/' }"
    >
      Needed
    </button>
    <button
      ng-click="vm.gotoPurchasedItems()"
      ng-class="{ active: vm.active === '/bought' }"
    >Purchased</button>
  </div>
`;

export default nav;
