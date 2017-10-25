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
  let vm = this;
  vm.active;
  vm.gotoNeededItems = gotoNeededItems;
  vm.gotoPurchasedItems = gotoPurchasedItems;

  setActivePath();

  function gotoPurchasedItems(): void {
    $location.path('/bought');
    setActivePath();
  }

  function gotoNeededItems(): void {
    $location.path('/');
    setActivePath();
  }

  function setActivePath(): void {
    vm.active = $location.path();
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
