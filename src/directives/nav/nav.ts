import './nav.less';

export default function nav(): angular.IDirective {
  return {
    restrict: 'E',
    scope: {},
    controllerAs: 'vm',
    controller,
    template,
  };
}

controller.$inject = ['$location', '$scope'];
function controller($location:angular.ILocationService, $scope: angular.IScope): void {
  let vm = this;
  vm.active;
  vm.gotoNeededItems = gotoNeededItems;
  vm.gotoPurchasedItems = gotoPurchasedItems;

  $scope.$watch(
    () => $location.path(),
    () => {
      setActivePath();
    },
    true,
  );

  function gotoPurchasedItems(): void {
    $location.path('/purchased');
  }

  function gotoNeededItems(): void {
    $location.path('/needed');
  }

  function setActivePath(): void {
    vm.active = $location.path();
  }
}

const template = `
  <div class="nav" flex layout="row" layout-align="center center">

    <span
      class="nav-item md-display-1"
      ng-click="vm.gotoNeededItems()"
      ng-class="{ active: vm.active === '/needed' }"
    >Needed</span>

    <span class="nav-separator md-display-1">/</span>

    <span
      class="nav-item md-display-1"
      ng-click="vm.gotoPurchasedItems()"
      ng-class="{ active: vm.active === '/purchased' }"
    >Purchased</span>

  </div>
`;
