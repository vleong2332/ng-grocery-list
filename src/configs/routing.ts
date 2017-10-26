export default function routing($routeProvider: angular.route.IRouteProvider) {
  $routeProvider
    .when('/', itemsNeeded)
    .when('/bought', itemsPurchased)
    .otherwise({
      redirectTo: '/'
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
    <items-purchased
      layout="column"
      layout-align="center stretch"
      items="vm.purchasedItems"
    ></items-purchased>`,
};
