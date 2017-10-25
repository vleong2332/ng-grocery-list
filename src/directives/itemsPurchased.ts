import { DataService, Item } from '../services/dataService';

const itemsPurchased = function() {
  return {
    restrict: 'E',
    scope: {
      items: '=',
      refreshItems: '=',
    },
    template: `
      <div class="items-purchased">
        <h3>{{ items.length }} items purchased</h3>
        <item-list
          items="items"
          refresh-items="refreshItems"
        ></item-list>
      </div>
    `,
  };
};

export default itemsPurchased;
