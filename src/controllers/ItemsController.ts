import { DataService } from '../services/dataService';

function ItemsController(dataService: DataService): void {
  let vm = this;
  // vm.items = dataService.getAllItems();
  // vm.items = [{ id: 0, text: 'test', isBought: false}]
}

ItemsController.$inject = ['dataService']

export default ItemsController;
