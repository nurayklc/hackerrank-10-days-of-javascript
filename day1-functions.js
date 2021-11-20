function factorial(n) {
  // while solution
  // let count = 1;
  // let result = 1;
  // while(count <= n ){
  //     result = count * result;
  //     count++;
  // }
  // return result;
  return n <= 1 ? 1 : n * factorial(n - 1);
}
