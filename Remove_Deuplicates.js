let arr = [0,3,1,0,2,3,5,3,2];

let k=1;
arr.sort((a,b) => a-b)

for(let i=1; i<arr.length; i++) {
    if(arr[i] !== arr[i-1]) {
        arr[k] = arr[i]
        k++;
    }
    
}
console.log(arr.slice(0,k))
