let arr = [2,5,3,8,5,3,1,4,5];

let k=4;
let sum = 0;

for(let i=0; i<k; i++) {
    sum += arr[i]
}
let max = sum;

for(let i=k; i<arr.length; i++) {
    sum = sum - arr[i-k] + arr[i];
    max = Math.max(max, sum)
}
    console.log(max)

