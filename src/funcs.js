export const deleteElement = (basket, id, hash) => {
  const list = [...basket];
  const has = { ...hash };
  has[id] -= 1;
  list.forEach((e, i) => {
    if (e.id === id) {
      list[i] = { ...list[i], amount: list[i].amount - 1 };
      if (has[id] === 0) {
        list.splice(i, 1);
      }
    }
  });
  return [list, has];
};

export const del = (basket, id, hash) => {
  const list = [];
  const has = { ...hash };
  has[id] = 0;
  basket.forEach((e) => {
    if (e.id === id) {
      return;
    } else {
      list.push({ ...e });
    }
  });
  return [list, has];
};

export const addElement = (basket, it, hash) => {
  const list = [...basket];
  const has = { ...hash };
  if (has[it.id]) {
    has[it.id] += 1;
    list.forEach((e, i) => {
      if (e.id === it.id) {
        list[i] = { ...list[i], amount: list[i].amount + 1 };
      }
    });
  } else {
    has[it.id] = 1;
    list.push({ ...it, amount: 1 });
  }
  return [list, has];
};

export const addOne = (basket, id, hash) => {
  const list = [...basket];
  const has = { ...hash };
  has[id] += 1;
  list.forEach((e, i) => {
    if (e.id === id) {
      list[i] = { ...list[i], amount: list[i].amount + 1 };
    }
  });
  return [list, has];
};
