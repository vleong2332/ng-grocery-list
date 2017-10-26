import '../style/nav.less';

export default function nav() {
  return {
    restrict: 'E',
    scope: {},
    controllerAs: 'vm',
    controller,
    template,
  };
}

function controller($location:angular.ILocationService) {
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
  <div class="nav" flex>
    <span
      class="nav-item md-display-1"
      ng-click="vm.gotoNeededItems()"
      ng-class="{ active: vm.active === '/' }"
    >Needed</span>
    <span class="nav-separator md-display-1">|</span>
    <span
      class="nav-item md-display-1"
      ng-click="vm.gotoPurchasedItems()"
      ng-class="{ active: vm.active === '/bought' }"
    >Purchased</span>
  </div>
`;
