// import { TestService } from '../services/testService';

const kcdHello = function() {
  // require('./kcd-hello.less');
  return {
    restrict: 'E',
    scope: {
      items: '='
    },
    template,
    controller: function () {
      let vm = this;
      // vm.greeting = testService.getMessage();
      // $log.info('hello, there');
    },
    controllerAs: 'vm',
  };
};

const template = `
  <div class="item-list">
    <h3>Item List</h3>
    <p ng-repeat="item in items">
      {{n.id}} - {{n.text}} - {{n.isBought}}
    </p>
  </div>
`;

export default kcdHello;
