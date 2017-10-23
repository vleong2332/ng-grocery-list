import routing from './routing';

export default {
  registerTo: function(ngModule: angular.IModule) {
    ngModule.config(routing);
  },
};
