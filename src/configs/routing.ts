export default function routing($routeProvider: angular.route.IRouteProvider) {
  $routeProvider
    .when('/', itemsNeeded)
    .when('/bought', itemsPurchased)
    .otherwise({
      redirectTo: '/'
    });
};

const itemsNeeded = {
  controller: 'itemsController',
  controllerAs: 'vm',
  template: `
    <items-needed
      items="vm.neededItems"
      refresh-items="vm.refreshItems"
    ></items-needed>
  `,
};

const itemsPurchased = {
  controller: 'itemsController',
  controllerAs: 'vm',
  template: `
    <items-purchased
      items="vm.purchasedItems"
      refresh-items="vm.refreshItems"
    ></items-purchased>
  `,
};
