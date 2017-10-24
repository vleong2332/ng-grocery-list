export default function routing($routeProvider: angular.route.IRouteProvider) {
  $routeProvider
    .when('/', itemsNeeded)
    .when('/bought', itemsPurchased)
    .otherwise({
      redirectTo: '/'
    });
};

const itemsNeeded = {
  template: `<items-needed></items-needed>`,
};

const itemsPurchased = {
  template: `<items-purchased></items-purchased>`,
};
