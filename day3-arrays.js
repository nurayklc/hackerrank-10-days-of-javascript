function getSecondLargest(nums) {
  // Complete the function
  let max = nums[0],
    secondMax;
  for (let i = 1; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (max - 1 == nums[i]) {
      secondMax = nums[i];
    }
  }
  return secondMax;
}
