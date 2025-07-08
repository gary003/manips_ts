const classmates = [
  { name: 'Maria Rodrigez', sex: 'f', age: 23 },
  { name: 'Sven Johansson', sex: 'm', age: 14 },
  { name: 'Sarah Ben Mohammed', sex: 'f', age: 76 },
  { name: 'Yemi Diallo', sex: 'm', age: 43 },
  { name: 'Emilia Durant', sex: 'f', age: 15 },
  { name: 'Marc Ronin', sex: 'm', age: 49 },
  { name: 'Igor Palowski', sex: 'm', age: 13 },
  { name: 'Clara Anderson', sex: 'f', age: 19 },
  { name: 'Carole Ronin', sex: 'f', age: 54 },
  { name: 'Inoue Yamato', sex: 'f', age: 23 },
];

const group = (arr) => {
  const res = Object.groupBy(arr, (val) => {
    if (val.sex === 'f' && val.age > 17) return 'adultF';
    if (val.sex === 'f' && val.age < 18) return 'minorF';
    if (val.sex === 'm' && val.age > 17) return 'adultM';
    if (val.sex === 'm' && val.age < 18) return 'minorM';
  });

  return res;
};

const getAdults = (arr) => {
  const gr = group(arr);
  return [...gr.adultF, ...gr.adultM];
};

const getFemales = (arr) => {
  return arr.filter((classM) => classM.sex === 'f');
};

const getMA = (arr) => {
  return arr.filter((classM) => [4,5].includes(Math.floor(classM.age / 10)));
};

console.log(group(classmates)); // 2

const adultsSet = new Set(getAdults(classmates));
const femalesSet = new Set(getFemales(classmates));
const middleAged = new Set(getMA(classmates));

console.info({ adultsSet, femalesSet , middleAged});

/** 
 * This wont work, sadly, the comparaison is made on the reference of the object , not its value ...
 * Despite existing (classMate143 in femaleAdults), the set sees it as a new classmates (because of object reference)
*/
const classMate143 = new Set([{ name: 'Carole Ronin', sex: 'f', age: 54 }])
const femalAdults = adultsSet.intersection(classMate143)

console.log( 
  femalAdults.intersection(middleAged)
)

