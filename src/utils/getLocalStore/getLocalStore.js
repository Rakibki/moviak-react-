const getLocalStore = (lsName) => {
  const tikets = [];
  let isTikets = localStorage.getItem(lsName);
  if (isTikets) {
    return JSON.parse(isTikets);
  }
  return tikets;
};

export default getLocalStore;
