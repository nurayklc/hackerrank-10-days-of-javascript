function modifyArray(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      arr[i] = nums[i] * 2;
    } else {
      arr[i] = nums[i] * 3;
    }
  }
  return arr;
}
