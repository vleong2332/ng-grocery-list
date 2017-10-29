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
  let items: Item[] = [
    { id: 0, text: 'ketchup', isPurchased: true },
    { id: 1, text: 'mayo', isPurchased: true },
    { id: 2, text: 'mustard', isPurchased: true },
    { id: 3, text: 'chili', isPurchased: true },
  ];

  return {
    getAll,
    getNeeded,
    getPurchased,
    add,
    remove,
    toggle,
  };

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
  }

  function remove(id: number): void {
    items = items.filter(i => i.id !== id);
  }

  function toggle(id: number): void {
    items = items.map(i => {
      if (i.id === id) {
        i.isPurchased = !i.isPurchased;
      }
      return i;
    });
  }
}
