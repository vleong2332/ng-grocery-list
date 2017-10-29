import routing from './routing';

export default function registerConfigs(ngModule: angular.IModule): void {
  ngModule.config(routing);
}
