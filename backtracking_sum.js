let nums = [1,2,3,4];
let target = 5;
let result = [];

function backtrack(start,path,sum) {
    if(sum === target) {
        result.push([...path]);
    }
    for(let i=start; i<nums.length; i++) {
        path.push(nums[i])
        backtrack(i+1,path, sum+nums[i])
        path.pop();
    }

}

backtrack(0,[],0)
console.log(result)