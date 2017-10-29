import contenteditable from './contenteditable';
import nav from './nav';
import newItemForm from './newItemForm';
import item from './item';
import itemList from './itemList';
import itemsNeeded from './itemsNeeded';
import itemsPurchased from './itemsPurchased';

export default function registerDirectives(ngModule: angular.IModule): void {
  const directives = {
    contenteditable,
    nav,
    newItemForm,
    item,
    itemList,
    itemsNeeded,
    itemsPurchased,
  };

  Object.keys(directives).forEach(key => {
    ngModule.directive(key, directives[key]);
  });
}
