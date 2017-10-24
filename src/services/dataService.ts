export class Item {
  id: number;
  text: string;
  isPurchased: boolean;
}

export class DataService {
  getAllItems: () => Item[];
  getNeededItems: () => Item[];
  getPurchasedItems: () => Item[];
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
  toggleItem: (id: number) => void;
  editItem: (id: number, text: string) => void;
}

export default function dataService(): DataService{
  let items: Item[] = [
    { id: 0, text: 'ketchup', isPurchased: false },
    { id: 1, text: 'mayo', isPurchased: false },
    { id: 2, text: 'mustard', isPurchased: true },
    { id: 3, text: 'chili', isPurchased: true },
  ];

  return {
    getAllItems,
    getNeededItems,
    getPurchasedItems,
    addItem,
    removeItem,
    toggleItem,
    editItem,
  };

  function getAllItems(): Item[] {
    return items.slice();
  }

  function getNeededItems(): Item[] {
    return items.filter(i => !i.isPurchased);
  }

  function getPurchasedItems(): Item[] {
    return items.filter(i => i.isPurchased);
  }

  function addItem(item: Item): void {
    items.push(item);
  }

  function removeItem(id: number): void {
    items = items.filter(i => i.id !== id);
  }

  function toggleItem(id: number): void {
    items = items.map(i => {
      console.log('matching id', i.id, id, i.id === id);
      if (i.id === id) {
        console.log('matched');
        i.isPurchased = !i.isPurchased;
      }
      return i;
    });
    console.log('toggled', id, items);
  }

  function editItem(id: number, text: string): void {
    items = items.map(i => {
      if (i.id === id) {
        i.text = text;
      }
      return i;
    })
  }
}
