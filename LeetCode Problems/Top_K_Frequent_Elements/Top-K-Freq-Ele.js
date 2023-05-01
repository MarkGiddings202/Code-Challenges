var topKFrequent = function(nums, k) {
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1)
        }
    }
    
    let arr = [...map.entries()];
    arr.sort((a, b) => b[1] - a[1]);
    
    let res = [];
    for(let i = 0; i < k; i++) {
        res.push(arr[i][0])
    }
    return res;
};

console.log(topKFrequent([1,1,1,2,2,3], k = 2))