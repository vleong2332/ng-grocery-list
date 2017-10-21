import kcdHello from './kcd-hello';

export default {
  registerTo: function(ngModule: angular.IModule) {
    ngModule.directive('kcdHello', kcdHello);
  },
};
