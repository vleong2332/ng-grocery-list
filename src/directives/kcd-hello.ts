const kcdHello = (testService) => {
  require('./kcd-hello.less');
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
  };
};

const template = `
  <div class="kcd-hello">
    <p>muahahaha</test>
    {{vm.greeting}}
  </div>
`;

function controller(testService) {
  let vm = this;
  vm.greeting = testService.getMessage();
}

export default kcdHello;
