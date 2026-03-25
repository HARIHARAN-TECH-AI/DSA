let arr = [40,65,25,10,15,5,20]
let target = 25;

let set = new Set();

for(let i=0; i<arr.length; i++) {
    let need = target-arr[i];
    if(set.has(need)) {
        console.log(`[${need}`,`${arr[i]}]`)
    }
    set.add(arr[i])
}
console.log(set)