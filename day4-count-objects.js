function getCount(objects) {
  let objectLength = Object.keys(objects).length;
  let count = 0;
  for (let i = 0; i < objectLength; i++) {
    if (objects[i].x == objects[i].y) {
      count++;
    }
  }
  return count;
}
