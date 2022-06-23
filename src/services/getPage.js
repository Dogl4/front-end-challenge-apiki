function getPage(indexInArray) {
  let page = 1;
  for (let i = 0; i < 17; i += 1) {
    if (indexInArray < i * 10) {
      page = i;
      break;
    }
  }
  return page;
}

export default getPage;
