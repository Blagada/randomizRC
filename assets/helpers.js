
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

export function getGroupedArray(list, keyGetter) {
  const grouped = groupBy(list, keyGetter)
  let arrObj = [];
  grouped.forEach((value, key, map) => {
    let obj = {
      "name": key,
      "members": value,
    }
    arrObj.push(obj); 
  });
  return(arrObj);
}

export function randomizeArray(array) {
  let randomizedArray = array;
  for (let i = randomizedArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [randomizedArray[i], randomizedArray[j]] = [randomizedArray[j], randomizedArray[i]];
  }
  return randomizedArray
}

export function regularTeamDistribution(userQty, numberOfTeams){
  let teamDistribution = [];
  var currTeamIndex = 1;
  for (let i = 0; i < userQty; i++) {
    teamDistribution.push(currTeamIndex);
    currTeamIndex = currTeamIndex + 1; 
    if (currTeamIndex > numberOfTeams) {
      currTeamIndex = 1;
    }
  }  
  return teamDistribution;
}

