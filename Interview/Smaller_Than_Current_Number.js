var smallerNumbersThanCurrent = function(nums) {
    let ans = [];
    for(let i = 0; i < nums.length; i++) {
        let count = 0;
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] < nums[i]) {
                count++;
            }
        }
        ans.push(count);
    }

    return ans;
};

var arr = [8, 1, 2, 2, 3];

console.log(smallerNumbersThanCurrent(arr));