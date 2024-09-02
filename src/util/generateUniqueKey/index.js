let globalPrefix = 'id';
let lastId = 0;
const nextgenerateUniqueKey = (localPrefix) => {
  lastId++;
  return `${localPrefix || globalPrefix}${lastId}`;
};

const generateUniqueNumber = () => {
  return Math.floor(Math.random() * 100_000_000_000);
};

export const generateUniqueKey = (pre) => {
  return `${pre}_${nextgenerateUniqueKey()}_${new Date().getTime()}_${generateUniqueNumber()}_`.toLowerCase();
};
