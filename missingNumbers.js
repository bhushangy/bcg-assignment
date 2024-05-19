// https://leetcode.com/problems/missing-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const emptyArr = Array.from({ length: nums.length + 1 }, () => -1);
  
    for (let i = 0; i < nums.length; i++) {
      emptyArr[nums[i]] = nums[i];
    }
  
    let res = null;
    for (let i = 0; i < emptyArr.length; i++) {
      if (emptyArr[i] === -1) {
        res = i;
        break;
      }
    }
    return res;
  };
  
  /**
   * @param {number[]} nums
   * @return {number}
   */
  // var missingNumber = function (nums) {
  //   const n = nums.length;
  
  //   var total = (n * (n + 1)) / 2;
  //   var sum = 0;
  
  //   for (var i = 0; i < n; i++) {
  //     sum = sum + nums[i];
  //   }
  
  //   return total - sum;
  // };
  