import '../style/itemsPurchased.less';

export default function itemsPurchased() {
  return {
    restrict: 'E',
    scope: {
      items: '=',
    },
    template: `
      <div class="items-purchased" layout="column" layout-align="center stretch">

        <div class="item-count-wrapper" layout="row" layout-align="center">
          <h3>{{ items.length }} items purchased</h3>
        </div>

        <item-list items="items"></item-list>
      </div>
    `,
  };
};
