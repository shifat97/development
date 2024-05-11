function reverse_number(arr) {
    if (arr.length === 0)
        return 0;

    let ans = '';
    for (i = arr.length - 1; i >= 0; i--) {
        ans += arr[i];
    }

    return parseInt(ans);
}

var addTwoNumbers = function (l1, l2) {
    let n1 = reverse_number(l1);
    let n2 = reverse_number(l2);
    let sum = n1 + n2;
    const ans = [];

    if (sum === 0) {
        ans.push(0);
    } else {
        let mod;
        while (sum > 0) {
            mod = sum % 10;
            ans.push(mod);
            sum = Math.floor(sum / 10);
        }
    }

    return ans;
};

let l1 = [2, 4, 3], l2 = [5, 6, 4];
const ans = addTwoNumbers(l1, l2);
console.log(ans);