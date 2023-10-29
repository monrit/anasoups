export const setItemWithTime = (name: string, items: any): void => {
  const now = new Date();
  localStorage.setItem(name, JSON.stringify({ items: items, time: now.getTime() + 43200000 }));
};

export const getItemsWithTime = (name: string): any => {
  const cartWithTimeString = localStorage.getItem(name);
  const cartWithTimeObj = cartWithTimeString
    ? JSON.parse(cartWithTimeString)
    : null;

  const now = new Date();

  if (cartWithTimeObj) {
    if (now.getTime() < cartWithTimeObj.time) {
      return cartWithTimeObj.items;
    }
    localStorage.removeItem(name);
    return null;
  }
};
