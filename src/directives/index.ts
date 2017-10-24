import itemList from './itemList';
import itemsNeeded from './itemsNeeded';
import itemsPurchased from './itemsPurchased';

export default {
  registerTo: function(ngModule: angular.IModule) {
    const directives = {
      itemsNeeded,
      itemsPurchased,
      // itemList,
    }

    Object.keys(directives).forEach(key => {
      ngModule.directive(key, directives[key]);
    })
    ngModule.component('itemList', itemList);
  },
};
