const item = {
  bindings: {
    name: '<',
    onToggle: '&',
    onDelete: '&',
  },
  template: `
    <div class="item">
      <p class="item-name">{{$ctrl.name}}</p>
      <span ng-click="$ctrl.onToggle()">Toggle</span>
      <span ng-click="$ctrl.onDelete()">Delete</span>
    </div>
  `,
  replace: true,
};

export default item;
