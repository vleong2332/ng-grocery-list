import itemList from './itemList';
import item from './item';
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
    ngModule.component('item', item);
  },
};
