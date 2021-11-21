class Polygon {
  constructor(array = []) {
    this.array = array;
  }
  perimeter() {
    let result = 0;
    for (let i = 0; i < this.array.length; i++) {
      result += Number(this.array[i]);
    }
    return result;
  }
}
