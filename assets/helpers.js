
export const locations = [
    {
      id: 'MTL',
      name: 'Montréal',
      abbrName: 'Mtl',
    },
    {
      id: 'QC',
      name: 'Québec',
      abbrName: 'Qc',
    },
    {
      id: 'HOME',
      name: 'Télétravail',
      abbrName: 'T9l'
    },
  ];

export const getIsActive = (item) => {
  var isTrueSet = (item.toLowerCase() === 'true');
  return isTrueSet
}

export function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
          map.set(key, [item]);
      } else {
          collection.push(item);
      }
  });
  return map;
}