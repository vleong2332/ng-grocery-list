import { DataService, Item } from '../services/dataService';

export default function itemsPurchased() {
  return {
    restrict: 'E',
    scope: {
      items: '=',
    },
    template: `
      <div class="items-purchased">
        <h3>{{ items.length }} items purchased</h3>
        <item-list items="items"></item-list>
      </div>
    `,
  };
};
