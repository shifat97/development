// var runningSum = function(arr) {
//     let ans = [];
//     for(let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         if(i == 0) {
//             sum += arr[i];
//         } else {
//             for(let j = i - 1; j >= 0; j--) {
//                 sum += arr[j];
//             }
//             sum += arr[i];
//         }
//         ans.push(sum);
//     }

//     return ans;
// }

var runningSum = function (nums) {
    let s = 0;
    for (let i = 0; i < nums.length; i++) {
        s = s + nums[i];
        nums[i] = s;
    }
    return nums;
};

const arr = [1,1,1,1,1];

console.log(runningSum(arr));