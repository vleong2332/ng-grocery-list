routing.$inject = ['$routeProvider'];
export default function routing($routeProvider: angular.route.IRouteProvider): void {
  $routeProvider
    .when('/needed', {
      template: '<items-needed></items-needed>'
    })
    .when('/purchased', {
      template: '<items-purchased><items-purchased>'
    })
    .otherwise({
      redirectTo: '/needed'
    });
}
