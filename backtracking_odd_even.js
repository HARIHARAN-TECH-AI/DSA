let nums = [3,2,5,8,7,4];
let k=3;
let result = []
function backtrack(start,path) {
    if(path.length === k){
    result.push([...path])
    return;
    }

    for(let i=start; i<nums.length; i++) {
        path.push([nums[i]])
        backtrack(i+1,path)
        path.pop()
    }

}
backtrack(0,[])
console.log(result)