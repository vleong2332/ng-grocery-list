import * as angular from 'angular';

export interface Item {
  id: number;
  text: string;
  isPurchased: boolean;
}

export interface ItemsService {
  getAll: () => Item[];
  getNeeded: () => Item[];
  getPurchased: () => Item[];
  add: (name: string) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
}

export default function itemsService(): ItemsService{
  let items: Item[];

  init();

  return {
    getAll,
    getNeeded,
    getPurchased,
    add,
    remove,
    toggle,
  };

  function init(): void {
    const storedData = localStorage.getItem('groceryList');
    items = storedData
      ? angular.fromJson(storedData)
      : [];
  }

  function getAll(): Item[] {
    return items;
  }

  function getNeeded(): Item[] {
    return items.filter(i => !i.isPurchased);
  }

  function getPurchased(): Item[] {
    return items.filter(i => i.isPurchased);
  }

  function add(name: string): void {
    items.push({
      id: Date.now(),
      text: name,
      isPurchased: false,
    });
    syncToStore();
  }

  function remove(id: number): void {
    items = items.filter(i => i.id !== id);
    syncToStore();
  }

  function toggle(id: number): void {
    items = items.map(i => {
      if (i.id === id) {
        i.isPurchased = !i.isPurchased;
      }
      return i;
    });
    syncToStore();
  }

  function syncToStore(): void {
    localStorage.setItem('groceryList', angular.toJson(items));
  }
}
