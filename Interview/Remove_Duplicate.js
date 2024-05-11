// Remove duplicate using new array
function removeDuplicate1(arr) 
{
    let ans = [];
    for(let i = 0; i < arr.length - 1; i++) 
    {
        if(!ans.includes(arr[i])) 
        {
            ans.push(arr[i]);
        }
    }

    return ans;
}

const arr = [1, 1, 2, 2, 3, 3];
const ans = removeDuplicate1(arr); 
console.log(ans);

// Remove duplicate without using new array
function removeDuplicate2(arr) 
{
    let current_index = 1;
    for(let i = 1; i < arr.length; i++) 
    {
        if(arr[i] != arr[i - 1]) 
        {
            ans.push(arr[i]);
            current_index++;
        }
    }

    return ans;
}

const arr1 = [1, 1, 2, 2, 3, 3];
const ans1 = removeDuplicate2(arr); 
console.log(ans);