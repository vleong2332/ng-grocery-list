export default function routing($routeProvider: angular.route.IRouteProvider) {
  $routeProvider
    .when('/', itemsNeeded)
    .when('/bought', itemsPurchased)
    .otherwise({
      redirectTo: '/'
    });
};

const itemsNeeded = {
  controller: 'ItemsController',
  controllerAs: 'vm',
  template: `<items-needed></items-needed>`,
};

const itemsPurchased = {
  controller: 'ItemsController',
  controllerAs: 'vm',
  template: `<items-purchased></items-purchased>`,
};
