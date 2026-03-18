let arr = [1,0,3,4,0,6,0,5];

let inserPos = 0;

for(let i=0; i<arr.length; i++) {
    if(arr[i] !== 0) {
        arr[inserPos] = arr[i];
        inserPos++;
    }
}
for(let i=inserPos; i<arr.length; i++) {
    arr[i] = 0;

}
        console.log(arr)

