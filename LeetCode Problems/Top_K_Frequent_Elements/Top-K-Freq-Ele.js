var topKFrequent = function (nums, k) {
  let freq = {};

  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]]) {
      freq[nums[i]] += 1;
    } else {
      freq[nums[i]] = 1;
    }
  }
  console.log(freq);

  let arr = Object.entries(freq);

  console.log(arr);

  arr.sort((a, b) => b[1] - a[1]);

  console.log(arr);

  let res = [];

  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }

  console.log(res);

  // const map = new Map();

  // console.log(map)

  // for(let i = 0; i < nums.length; i++) {
  //     if(map.has(nums[i])){
  //         map.set(nums[i], map.get(nums[i]) + 1);
  //     } else {
  //         map.set(nums[i], 1)
  //     }
  // }

  // let arr = [...map.entries()];

  // arr.sort((a, b) => a[1] - b[1]);

  // console.log('array' , arr)

  // let res = [];

  // for(let i = 0; i < k; i++) {
  //     res.push(arr[i][0])
  // }
  // return res;
};

topKFrequent([4, 1, 1, 1, 2, 2, 3], (k = 2));
