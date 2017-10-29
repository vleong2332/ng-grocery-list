interface ParentScope extends angular.IScope {
  vm?: angular.IController;
}

// Hack? Why does RootElementService not have blur?
interface ElementWithBlur extends angular.IRootElementService {
  blur: () => void;
}

export default function contenteditable(): angular.IDirective {
  return {
    restrict: 'A',
    require: '?ngModel',
    link,
  };
}

function link(
  $scope: ParentScope,
  $element: ElementWithBlur,
  $attrs: angular.IAttributes,
  $ctrl: angular.INgModelController
) {
  $ctrl.$render = render;

  $element.on('blur', handleBlur);

  if ($attrs.hasOwnProperty('blurOnEnter')) {
    // $element.on('keypress', handleBlurOnEnter);
    $element.on('keypress', handleBlurOnEnter)
  }

  function render(): void {
    $element.html($ctrl.$viewValue || '');
  }

  function handleBlur(): void {
    // Without $apply, the $digest may not or will not get called when onBlur updates anything,
    // causing the ng-class expression to lags behind
    $scope.$apply(() => {
      const html = cleanName($element.html());

      $ctrl.$setViewValue(html);
      $ctrl.$render();

      $scope.vm.onBlur && $scope.vm.onBlur();
    });
  }

  function handleBlurOnEnter($event: JQueryKeyEventObject): void {
    $event.key === 'Enter' && $element.blur();
  }

  function cleanName(text: string): string {
    return text.replace(/&nbsp;/gi, ' ').trim();
  }
}
