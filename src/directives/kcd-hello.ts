const kcdHello = (testService) => ({
  restrict: 'E',
  scope: {},
  templateUrl: 'directives/kcd-hello.html',
  controllerAs: 'vm',
  controller: kcdHelloController,
});

function kcdHelloController(testService) {
  let vm = this;
  vm.greeting = testService.getMessage();
}

export default kcdHello;
