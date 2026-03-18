const readline = require('readline')

let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let result = [];

rl.on("line",(line) => {
    result.push(line)
})

rl.on("close", () => {
 
})

function maxVal() {
    
    let T = parseInt(result[0]);
    let currentLine = 1;
    
    for(let t=0; t<T; t++) {
        
        let N = parseInt(result[currentLine])
        currentLine++;
        
        let arr = result[currentLine].split(" ").map(Number)
        currentLine++;
        
        let max = arr[0];
        
        for(let num of arr) {
            if(num > max) {
                max = num;
            }
        }
        console.log(max)
    }
   
}
