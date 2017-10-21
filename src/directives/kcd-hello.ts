import { TestService } from '../services/testService';

const kcdHello = function($log: angular.ILogService, testService: TestService) {
  require('./kcd-hello.less');
  return {
    restrict: 'E',
    scope: {},
    template,
    controller: function (testService: TestService) {
      let vm = this;
      vm.greeting = testService.getMessage();
      $log.info('hello, there');
    },
    controllerAs: 'vm',
  };
};

const template = `
  <div class="kcd-hello">
    <p>muahahaha</test>
    {{vm.greeting}}
  </div>
`;

export default kcdHello;
