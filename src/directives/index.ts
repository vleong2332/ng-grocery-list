import contenteditable from './contenteditable';
import nav from './nav';
import itemList from './itemList';
import item from './item';
import newItemForm from './newItemForm';
import itemsNeeded from './itemsNeeded';
import itemsPurchased from './itemsPurchased';

export default {
  registerTo: function(ngModule: angular.IModule) {
    const directives = {
      itemsNeeded,
      itemsPurchased,
      itemList,
      item,
      nav,
      newItemForm,
      contenteditable,
    };

    Object.keys(directives).forEach(key => {
      ngModule.directive(key, directives[key]);
    });
  },
};
