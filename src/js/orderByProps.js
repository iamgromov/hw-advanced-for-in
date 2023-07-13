const orderByProps = (obj = {}, rule = []) => {
  const tempArray = [];
  const finalArray = [];

  for (const key in obj) {
    if (!rule.includes(key)) {
      tempArray.push(key);
    }
  }

  tempArray.sort();

  rule.forEach((elem) => {
    finalArray.push({ key: elem, value: obj[elem] });
  });

  tempArray.forEach((elem) => {
    finalArray.push({ key: elem, value: obj[elem] });
  });

  return finalArray;
};

export default orderByProps;
