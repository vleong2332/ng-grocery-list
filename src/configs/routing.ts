export default function routing($routeProvider: angular.route.IRouteProvider) {
  $routeProvider
    .when('/needed', itemsNeeded)
    .when('/purchased', itemsPurchased)
    .otherwise({
      redirectTo: '/needed'
    });
}

const itemsNeeded = {
  controller: 'itemsController',
  controllerAs: 'vm',
  template: `<items-needed class="items-needed-wrapper" items="vm.neededItems"></items-needed>`,
};

const itemsPurchased = {
  controller: 'itemsController',
  controllerAs: 'vm',
  template: `
    <items-purchased class="items-purchased-wrapper" items="vm.purchasedItems"></items-purchased>`,
};
